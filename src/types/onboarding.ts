export const timeAwayOptions = [
  'A few weeks',
  'A few months',
  'About a year',
  'Longer than that'
] as const;

export const rustyAreaOptions = [
  'Python basics',
  'Loops',
  'Functions',
  'Objects',
  "Honestly, I don’t know anymore"
] as const;

export type TimeAwayAnswer = (typeof timeAwayOptions)[number];
export type RustyAreaAnswer = (typeof rustyAreaOptions)[number];

export type OnboardingData = {
  timeAway: TimeAwayAnswer;
  rustyArea: RustyAreaAnswer;
};
