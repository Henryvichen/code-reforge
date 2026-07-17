import type { OnboardingData } from '../types/onboarding';

const onboardingStorageKey = 'code-reforge:onboarding';

export function loadOnboardingData(): OnboardingData | null {
  const saved = window.localStorage.getItem(onboardingStorageKey);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved) as OnboardingData;
  } catch {
    window.localStorage.removeItem(onboardingStorageKey);
    return null;
  }
}

export function saveOnboardingData(data: OnboardingData): void {
  window.localStorage.setItem(onboardingStorageKey, JSON.stringify(data));
}
