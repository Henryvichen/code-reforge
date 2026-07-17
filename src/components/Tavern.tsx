import { getStarterQuestConcept } from '../lib/starterQuest';
import type { OnboardingData } from '../types/onboarding';
import { QuestCard } from './QuestCard';

type TavernProps = {
  onboardingData: OnboardingData;
};

export function Tavern({ onboardingData }: TavernProps) {
  const starterConcept = getStarterQuestConcept(onboardingData.rustyArea);

  return (
    <main className="app-shell tavern-screen">
      <section className="tavern-layout" aria-labelledby="tavern-title">
        <div className="tavern-header">
          <p className="eyebrow">The Ember Mug Tavern</p>
          <h1 id="tavern-title">Quest Board</h1>
          <p className="guild-message">
            Guild Master Rowan raises a lantern from the long table. "Welcome back, reclaimer.
            Start small, take heart, and let the first repair remind your hands what they know."
          </p>
        </div>

        <aside className="player-profile" aria-label="Player profile">
          <h2>Player Profile</h2>
          <dl>
            <div>
              <dt>Time away</dt>
              <dd>{onboardingData.timeAway}</dd>
            </div>
            <div>
              <dt>Rustiest area</dt>
              <dd>{onboardingData.rustyArea}</dd>
            </div>
          </dl>
        </aside>

        <div className="quest-board">
          <QuestCard title="Lost Hammer" difficulty={1} concept={starterConcept} rewardGold={15} />
        </div>
      </section>
    </main>
  );
}
