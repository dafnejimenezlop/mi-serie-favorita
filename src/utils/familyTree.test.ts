import { describe, expect, it } from 'vitest';
import { familiasData, relationshipData } from '../data/familias';
import type { Family, FamilyRelationship } from '../data/familias';
import {
  computeLineage,
  getAllCharacters,
  getCompleteRelationships,
  getFamilyCharacters,
  validateRelationships,
} from './familyTree';

describe('getFamilyCharacters / getAllCharacters', () => {
  it('flattens every generation of a single family', () => {
    const kahnwald = familiasData.find((family) => family.id === 'kahnwald')!;
    const characters = getFamilyCharacters(kahnwald);

    expect(characters.map((character) => character.id)).toEqual(
      kahnwald.generations.flat().map((character) => character.id),
    );
    expect(characters.every((character) => character.familyId === 'kahnwald')).toBe(
      true,
    );
  });

  it('returns the combined character count across all families', () => {
    const totalFromGenerations = familiasData.reduce(
      (sum, family) => sum + family.generations.flat().length,
      0,
    );

    expect(getAllCharacters(familiasData)).toHaveLength(totalFromGenerations);
  });
});

describe('getCompleteRelationships', () => {
  it('deduplicates a couple relationship regardless of from/to order', () => {
    const relationships: FamilyRelationship[] = [
      { id: 'a', type: 'couple', from: 'x', to: 'y' },
      { id: 'b', type: 'couple', from: 'y', to: 'x' },
    ];

    expect(getCompleteRelationships(relationships)).toHaveLength(1);
  });

  it('keeps distinct parent-child relationships separate', () => {
    const relationships: FamilyRelationship[] = [
      { id: 'a', type: 'parentChild', from: 'p1', to: 'child' },
      { id: 'b', type: 'parentChild', from: 'p2', to: 'child' },
    ];

    expect(getCompleteRelationships(relationships)).toHaveLength(2);
  });

  it('produces no duplicate/unknown findings against the real project data', () => {
    const result = validateRelationships(familiasData, relationshipData);

    expect(result.missingEndpoints).toEqual([]);
    expect(result.duplicateIds).toEqual([]);
    expect(result.unknownTypes).toEqual([]);
  });
});

describe('computeLineage', () => {
  it('includes both ancestors and descendants of a character with both', () => {
    // ines -> mikkel -> jonas ; hannah -> jonas (couple mikkel-hannah)
    const lineage = computeLineage('mikkel', relationshipData);

    expect(lineage.has('mikkel')).toBe(true);
    expect(lineage.has('ines')).toBe(true); // ancestor
    expect(lineage.has('jonas')).toBe(true); // descendant
    expect(lineage.has('hannah')).toBe(true); // couple link
  });

  it('returns only itself for a character with no relationships', () => {
    const relationships: FamilyRelationship[] = [
      { id: 'a', type: 'couple', from: 'x', to: 'y' },
    ];

    const lineage = computeLineage('lonely-character', relationships);

    expect(Array.from(lineage)).toEqual(['lonely-character']);
  });
});

describe('validateRelationships', () => {
  const family: Family = {
    id: 'test-family',
    name: 'Test Family',
    subtitle: 'subtitle',
    accent: '#fff',
    cover: '/cover.jpg',
    generations: [
      [{ id: 'known-a', name: 'A', avatar: '/a.jpg', stages: [] }],
      [{ id: 'known-b', name: 'B', avatar: '/b.jpg', stages: [] }],
    ],
  };

  it('flags a relationship whose endpoint is not a known character', () => {
    const relationships: FamilyRelationship[] = [
      { id: 'r1', type: 'parentChild', from: 'known-a', to: 'ghost-character' },
    ];

    const result = validateRelationships([family], relationships);

    expect(result.missingEndpoints).toHaveLength(1);
    expect(result.missingEndpoints[0].id).toBe('r1');
  });

  it('flags a duplicate relationship id', () => {
    const relationships: FamilyRelationship[] = [
      { id: 'dup', type: 'couple', from: 'known-a', to: 'known-b' },
      { id: 'dup', type: 'parentChild', from: 'known-a', to: 'known-b' },
    ];

    const result = validateRelationships([family], relationships);

    expect(result.duplicateIds).toEqual(['dup']);
  });

  it('flags an unknown relationship type', () => {
    const relationships = [
      {
        id: 'r-bad-type',
        // Intentionally invalid to exercise the unknownTypes check.
        type: 'sibling' as FamilyRelationship['type'],
        from: 'known-a',
        to: 'known-b',
      },
    ];

    const result = validateRelationships([family], relationships);

    expect(result.unknownTypes).toHaveLength(1);
    expect(result.unknownTypes[0].id).toBe('r-bad-type');
  });
});
