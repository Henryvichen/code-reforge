import { describe, expect, it } from 'vitest';
import { getStarterQuestConcept } from './starterQuest';

describe('getStarterQuestConcept', () => {
  it('uses the selected rustiest area when it maps directly to a starter concept', () => {
    expect(getStarterQuestConcept('Loops')).toBe('Loops');
    expect(getStarterQuestConcept('Functions')).toBe('Functions');
    expect(getStarterQuestConcept('Objects')).toBe('Objects');
  });

  it('starts uncertain players with Python basics', () => {
    expect(getStarterQuestConcept("Honestly, I don’t know anymore")).toBe('Python basics');
  });
});
