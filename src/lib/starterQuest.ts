import type { RustyAreaAnswer } from '../types/onboarding';

const conceptByRustyArea: Record<RustyAreaAnswer, string> = {
  'Python basics': 'Python basics',
  Loops: 'Loops',
  Functions: 'Functions',
  Objects: 'Objects',
  "Honestly, I don’t know anymore": 'Python basics'
};

export function getStarterQuestConcept(rustyArea: RustyAreaAnswer): string {
  return conceptByRustyArea[rustyArea];
}
