import type {
  Family,
  FamilyCharacter,
  FamilyRelationship,
  RelationshipType,
} from '../data/familias';

export type CharacterRef = FamilyCharacter & {
  familyId: string;
  familyName: string;
  familyAccent: string;
  generationIndex: number;
  characterIndex: number;
};

export type RelationshipValidation = {
  missingEndpoints: FamilyRelationship[];
  duplicateIds: string[];
  unknownTypes: FamilyRelationship[];
};

const allowedRelationshipTypes = new Set<RelationshipType>([
  'couple',
  'parentChild',
]);

export function getFamilyCharacters(family: Family): CharacterRef[] {
  return family.generations.flatMap((generation, generationIndex) =>
    generation.map((character, characterIndex) => ({
      ...character,
      familyId: family.id,
      familyName: family.name,
      familyAccent: family.accent,
      generationIndex,
      characterIndex,
    })),
  );
}

export function getAllCharacters(families: Family[]): CharacterRef[] {
  return families.flatMap((family) => getFamilyCharacters(family));
}

export function getRelationshipsForFamily(
  relationships: FamilyRelationship[],
  familyId: string,
): FamilyRelationship[] {
  return relationships.filter(
    (relationship) => relationship.familyId === familyId,
  );
}

export function getCompleteRelationships(
  relationships: FamilyRelationship[],
): FamilyRelationship[] {
  const seen = new Set<string>();

  return relationships.filter((relationship) => {
    const key =
      relationship.type === 'couple'
        ? [
            relationship.type,
            ...[relationship.from, relationship.to].sort(),
          ].join(':')
        : [relationship.type, relationship.from, relationship.to].join(':');

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * BFS ancestors + descendants of a character over the full relationship
 * graph. Couple relationships are included as direct links (a spouse is
 * part of the highlighted lineage) so the Complete Tree's hover highlight
 * reads as "this person's family branch", not just strict bloodline.
 */
export function computeLineage(
  characterId: string,
  relationships: FamilyRelationship[],
): Set<string> {
  const lineage = new Set<string>([characterId]);
  const queue: string[] = [characterId];

  while (queue.length > 0) {
    const current = queue.shift() as string;

    relationships.forEach((relationship) => {
      let neighbor: string | null = null;
      if (relationship.from === current) neighbor = relationship.to;
      else if (relationship.to === current) neighbor = relationship.from;

      if (neighbor && !lineage.has(neighbor)) {
        lineage.add(neighbor);
        queue.push(neighbor);
      }
    });
  }

  return lineage;
}

export function validateRelationships(
  families: Family[],
  relationships: FamilyRelationship[],
): RelationshipValidation {
  const knownCharacterIds = new Set(
    getAllCharacters(families).map((character) => character.id),
  );
  const relationshipIds = new Set<string>();
  const duplicateIds = new Set<string>();

  relationships.forEach((relationship) => {
    if (relationshipIds.has(relationship.id)) {
      duplicateIds.add(relationship.id);
      return;
    }
    relationshipIds.add(relationship.id);
  });

  return {
    missingEndpoints: relationships.filter(
      (relationship) =>
        !knownCharacterIds.has(relationship.from) ||
        !knownCharacterIds.has(relationship.to),
    ),
    duplicateIds: Array.from(duplicateIds),
    unknownTypes: relationships.filter(
      (relationship) => !allowedRelationshipTypes.has(relationship.type),
    ),
  };
}
