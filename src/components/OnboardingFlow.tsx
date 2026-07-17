import { useState } from 'react';
import {
  rustyAreaOptions,
  timeAwayOptions,
  type OnboardingData,
  type RustyAreaAnswer,
  type TimeAwayAnswer
} from '../types/onboarding';

type OnboardingFlowProps = {
  onComplete: (data: OnboardingData) => void;
};

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [timeAway, setTimeAway] = useState<TimeAwayAnswer | null>(null);
  const [rustyArea, setRustyArea] = useState<RustyAreaAnswer | null>(null);
  const canStart = Boolean(timeAway && rustyArea);

  function handleSubmit() {
    if (timeAway && rustyArea) {
      onComplete({ timeAway, rustyArea });
    }
  }

  return (
    <main className="app-shell">
      <section className="onboarding-panel" aria-labelledby="onboarding-title">
        <p className="eyebrow">A seat by the hearth</p>
        <h1 id="onboarding-title">Before the Guild opens the quest board...</h1>

        <fieldset className="choice-group">
          <legend>How long has it been since you last coded?</legend>
          <div className="choice-grid">
            {timeAwayOptions.map((option) => (
              <button
                className={option === timeAway ? 'choice selected' : 'choice'}
                key={option}
                type="button"
                onClick={() => setTimeAway(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="choice-group">
          <legend>What feels the rustiest?</legend>
          <div className="choice-grid">
            {rustyAreaOptions.map((option) => (
              <button
                className={option === rustyArea ? 'choice selected' : 'choice'}
                key={option}
                type="button"
                onClick={() => setRustyArea(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <button className="button primary" type="button" disabled={!canStart} onClick={handleSubmit}>
          Enter the Tavern
        </button>
      </section>
    </main>
  );
}
