import { useState } from 'react';
import { OnboardingFlow } from './components/OnboardingFlow';
import { Tavern } from './components/Tavern';
import { TitleScreen } from './components/TitleScreen';
import { loadOnboardingData, saveOnboardingData } from './lib/saveData';
import type { OnboardingData } from './types/onboarding';

type Screen = 'title' | 'onboarding' | 'tavern';

export default function App() {
  const [onboardingData, setOnboardingData] = useState<OnboardingData | null>(() =>
    loadOnboardingData()
  );
  const [screen, setScreen] = useState<Screen>('title');

  function handleNewGame() {
    setScreen('onboarding');
  }

  function handleContinue() {
    if (onboardingData) {
      setScreen('tavern');
    }
  }

  function handleOnboardingComplete(data: OnboardingData) {
    saveOnboardingData(data);
    setOnboardingData(data);
    setScreen('tavern');
  }

  if (screen === 'onboarding') {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  if (screen === 'tavern' && onboardingData) {
    return <Tavern onboardingData={onboardingData} />;
  }

  return (
    <TitleScreen
      hasSavedOnboarding={Boolean(onboardingData)}
      onNewGame={handleNewGame}
      onContinue={handleContinue}
    />
  );
}
