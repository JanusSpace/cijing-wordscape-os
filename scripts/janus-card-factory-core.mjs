import { readFile } from 'node:fs/promises';

const PACKAGE_REQUIRED_FIELDS = [
  'package_id',
  'package_version',
  'generated_by',
  'generated_at',
  'default_language',
  'domain_packs',
  'cards',
];

const DOMAIN_REQUIRED_FIELDS = ['domain_pack_id', 'name'];
const CARD_REQUIRED_FIELDS = [
  'card_id',
  'headword',
  'definition_zh',
  'definition_en',
  'part_of_speech',
  'examples',
  'source',
  'domain_pack_id',
  'scene_tags',
  'frequency_tier',
  'usage_tasks',
];

const SOURCE_REQUIRED_FIELDS = [
  'source_id',
  'source_name',
  'source_url',
  'source_type',
  'source_priority',
];

const FREQUENCY_TIERS = new Set(['F1', 'F2', 'F3', 'F4']);
const SOURCE_TYPES = new Set([
  'official_website',
  'official_docs',
  'api_reference',
  'help_center',
  'tool_ui',
  'cli_output',
  'error_message',
  'real_workflow',
  'other',
]);
const SOURCE_PRIORITIES = new Set(['P0', 'P1', 'P2', 'P3', 'P4']);
const CARD_STATUSES = new Set(['candidate', 'draft', 'approved', 'hold']);
const AUDIO_ACCENTS = new Set(['US', 'UK', 'tool-native', 'other']);

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isNonEmptyStringArray(value) {
  return Array.isArray(value) && value.length > 0 && value.every(isNonEmptyString);
}

function isSafeHttpUrl(value) {
  if (!isNonEmptyString(value)) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function addMissingFieldErrors(errors, object, fields, prefix) {
  for (const field of fields) {
    if (!(field in object)) {
      errors.push(`${prefix}.${field} is required.`);
    }
  }
}

function increment(mapLike, key) {
  const safeKey = isNonEmptyString(key) ? key : 'unknown';
  mapLike[safeKey] = (mapLike[safeKey] ?? 0) + 1;
}

function normalizeHeadword(value) {
  return String(value ?? '').trim().toLowerCase();
}

export async function loadPackageFromFile(filePath) {
  const raw = await readFile(filePath, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON in ${filePath}: ${error.message}`);
  }
}

export function loadPackageFromJson(packageJson) {
  if (typeof packageJson === 'string') {
    try {
      return JSON.parse(packageJson);
    } catch (error) {
      throw new Error(`Invalid package_json string: ${error.message}`);
    }
  }
  return packageJson;
}

export function validatePackage(data, sourceLabel = 'package') {
  const errors = [];
  const warnings = [];

  if (!isObject(data)) {
    return {
      source: sourceLabel,
      valid: false,
      errors: [`${sourceLabel} must be a JSON object.`],
      warnings,
    };
  }

  addMissingFieldErrors(errors, data, PACKAGE_REQUIRED_FIELDS, sourceLabel);

  if (!Array.isArray(data.domain_packs)) {
    errors.push(`${sourceLabel}.domain_packs must be an array.`);
  }
  if (!Array.isArray(data.cards)) {
    errors.push(`${sourceLabel}.cards must be an array.`);
  } else if (data.cards.length === 0) {
    errors.push(`${sourceLabel}.cards must contain at least 1 card.`);
  }

  for (const field of ['package_id', 'package_version', 'generated_by', 'generated_at', 'default_language']) {
    if (field in data && !isNonEmptyString(data[field])) {
      errors.push(`${sourceLabel}.${field} must be a non-empty string.`);
    }
  }

  const domainIds = new Set();
  if (Array.isArray(data.domain_packs)) {
    data.domain_packs.forEach((pack, index) => {
      const prefix = `${sourceLabel}.domain_packs[${index}]`;
      if (!isObject(pack)) {
        errors.push(`${prefix} must be an object.`);
        return;
      }
      addMissingFieldErrors(errors, pack, DOMAIN_REQUIRED_FIELDS, prefix);
      if (pack.domain_pack_id !== undefined) {
        if (!isNonEmptyString(pack.domain_pack_id)) {
          errors.push(`${prefix}.domain_pack_id must be a non-empty string.`);
        } else if (domainIds.has(pack.domain_pack_id)) {
          errors.push(`${prefix}.domain_pack_id duplicates ${pack.domain_pack_id}.`);
        } else {
          domainIds.add(pack.domain_pack_id);
        }
      }
      if (pack.name !== undefined && !isNonEmptyString(pack.name)) {
        errors.push(`${prefix}.name must be a non-empty string.`);
      }
      if (pack.scenes !== undefined && !isStringArray(pack.scenes)) {
        errors.push(`${prefix}.scenes must be an array of strings.`);
      }
    });
  }

  if (Array.isArray(data.cards)) {
    data.cards.forEach((card, index) => {
      const prefix = `${sourceLabel}.cards[${index}]`;
      if (!isObject(card)) {
        errors.push(`${prefix} must be an object.`);
        return;
      }

      addMissingFieldErrors(errors, card, CARD_REQUIRED_FIELDS, prefix);

      for (const field of ['card_id', 'headword', 'definition_zh', 'definition_en', 'part_of_speech', 'domain_pack_id']) {
        if (field in card && !isNonEmptyString(card[field])) {
          errors.push(`${prefix}.${field} must be a non-empty string.`);
        }
      }

      if (card.domain_pack_id && domainIds.size > 0 && !domainIds.has(card.domain_pack_id)) {
        errors.push(`${prefix}.domain_pack_id references unknown domain pack ${card.domain_pack_id}.`);
      }

      if (!isNonEmptyStringArray(card.scene_tags)) {
        errors.push(`${prefix}.scene_tags must be a non-empty string array.`);
      }

      if (!isNonEmptyStringArray(card.usage_tasks)) {
        errors.push(`${prefix}.usage_tasks must be a non-empty string array.`);
      }

      if (!Array.isArray(card.examples) || card.examples.length < 2) {
        errors.push(`${prefix}.examples must contain at least 2 examples.`);
      } else {
        card.examples.forEach((example, exampleIndex) => {
          const examplePrefix = `${prefix}.examples[${exampleIndex}]`;
          if (!isObject(example)) {
            errors.push(`${examplePrefix} must be an object.`);
            return;
          }
          if (!isNonEmptyString(example.example_en)) {
            errors.push(`${examplePrefix}.example_en must be a non-empty string.`);
          }
          if (!isNonEmptyString(example.example_zh)) {
            errors.push(`${examplePrefix}.example_zh must be a non-empty string.`);
          }
        });
      }

      if (!FREQUENCY_TIERS.has(card.frequency_tier)) {
        errors.push(`${prefix}.frequency_tier must be F1, F2, F3, or F4.`);
      }

      if (card.audio_url !== undefined && !isSafeHttpUrl(card.audio_url)) {
        errors.push(`${prefix}.audio_url must be a safe http(s) URL.`);
      }

      if (card.audio_accent !== undefined && !AUDIO_ACCENTS.has(card.audio_accent)) {
        errors.push(`${prefix}.audio_accent must be US, UK, tool-native, or other.`);
      }

      for (const field of ['synonyms', 'confusing_words', 'word_family', 'tags', 'links', 'aliases']) {
        if (card[field] !== undefined && !isStringArray(card[field])) {
          errors.push(`${prefix}.${field} must be an array of strings.`);
        }
      }

      if (card.card_status !== undefined && !CARD_STATUSES.has(card.card_status)) {
        errors.push(`${prefix}.card_status must be candidate, draft, approved, or hold.`);
      }

      if (card.card_status === 'approved' && card.source?.source_priority === 'P4') {
        errors.push(`${prefix} cannot be approved when source_priority is P4.`);
      }

      if (!isObject(card.source)) {
        errors.push(`${prefix}.source must be an object.`);
      } else {
        addMissingFieldErrors(errors, card.source, SOURCE_REQUIRED_FIELDS, `${prefix}.source`);
        for (const field of ['source_id', 'source_name', 'source_url', 'source_type', 'source_priority']) {
          if (field in card.source && !isNonEmptyString(card.source[field])) {
            errors.push(`${prefix}.source.${field} must be a non-empty string.`);
          }
        }
        if (card.source.source_url !== undefined && !isSafeHttpUrl(card.source.source_url)) {
          errors.push(`${prefix}.source.source_url must be a safe http(s) URL.`);
        }
        if (card.source.source_type !== undefined && !SOURCE_TYPES.has(card.source.source_type)) {
          errors.push(`${prefix}.source.source_type is not allowed.`);
        }
        if (card.source.source_priority !== undefined && !SOURCE_PRIORITIES.has(card.source.source_priority)) {
          errors.push(`${prefix}.source.source_priority must be P0, P1, P2, P3, or P4.`);
        }
      }

      if (!card.phonetic && !card.audio_url && !card.audio_asset_id) {
        warnings.push(`${prefix} has no phonetic or audio field; this is allowed only when pronunciation is uncertain.`);
      }
      if (!card.word_family || card.word_family.length === 0) {
        warnings.push(`${prefix} has no word_family; graph value may be weaker.`);
      }
      if (!card.confusing_words || card.confusing_words.length === 0) {
        warnings.push(`${prefix} has no confusing_words; graph diagnosis may be weaker.`);
      }
    });
  }

  return {
    source: sourceLabel,
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

export function countPackage(data) {
  const counts = {
    total_cards: Array.isArray(data?.cards) ? data.cards.length : 0,
    total_domain_packs: Array.isArray(data?.domain_packs) ? data.domain_packs.length : 0,
    by_domain_pack: {},
    by_scene: {},
    by_frequency_tier: {},
    by_card_status: {},
    by_source_priority: {},
  };

  if (!Array.isArray(data?.cards)) {
    return counts;
  }

  for (const card of data.cards) {
    increment(counts.by_domain_pack, card?.domain_pack_id);
    increment(counts.by_frequency_tier, card?.frequency_tier);
    increment(counts.by_card_status, card?.card_status ?? 'unset');
    increment(counts.by_source_priority, card?.source?.source_priority);

    const scenes = Array.isArray(card?.scene_tags) && card.scene_tags.length > 0 ? card.scene_tags : ['ungrouped'];
    for (const scene of scenes) {
      increment(counts.by_scene, scene);
    }
  }

  return counts;
}

export function dedupePackage(data) {
  const duplicateCardIds = [];
  const duplicateHeadwords = [];
  const seenCardIds = new Map();
  const seenHeadwords = new Map();

  if (!Array.isArray(data?.cards)) {
    return {
      has_duplicates: false,
      duplicate_card_ids: duplicateCardIds,
      duplicate_headwords: duplicateHeadwords,
    };
  }

  data.cards.forEach((card, index) => {
    const cardId = card?.card_id;
    if (isNonEmptyString(cardId)) {
      if (seenCardIds.has(cardId)) {
        duplicateCardIds.push({
          card_id: cardId,
          first_index: seenCardIds.get(cardId),
          duplicate_index: index,
        });
      } else {
        seenCardIds.set(cardId, index);
      }
    }

    const headword = normalizeHeadword(card?.headword);
    if (headword) {
      if (seenHeadwords.has(headword)) {
        duplicateHeadwords.push({
          headword,
          first_index: seenHeadwords.get(headword),
          duplicate_index: index,
        });
      } else {
        seenHeadwords.set(headword, index);
      }
    }
  });

  return {
    has_duplicates: duplicateCardIds.length > 0 || duplicateHeadwords.length > 0,
    duplicate_card_ids: duplicateCardIds,
    duplicate_headwords: duplicateHeadwords,
  };
}

export function generatePackageReport(data, sourceLabel = 'package') {
  const validation = validatePackage(data, sourceLabel);
  const counts = countPackage(data);
  const duplicates = dedupePackage(data);

  return {
    source: sourceLabel,
    ready_for_import: validation.valid && !duplicates.has_duplicates,
    validation,
    counts,
    duplicates,
  };
}
