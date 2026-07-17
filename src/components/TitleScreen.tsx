type TitleScreenProps = {
  hasSavedOnboarding: boolean;
  onNewGame: () => void;
  onContinue: () => void;
};

export function TitleScreen({ hasSavedOnboarding, onNewGame, onContinue }: TitleScreenProps) {
  return (
    <main className="app-shell title-screen">
      <section className="title-panel" aria-labelledby="game-title">
        <p className="eyebrow">The Guild calls again</p>
        <h1 id="game-title">Code Reforge</h1>
        <p className="tagline">Every quest rebuilds the town. Every solution rebuilds you.</p>
        <div className="title-actions">
          <button className="button primary" type="button" onClick={onNewGame}>
            New Game
          </button>
          {hasSavedOnboarding && (
            <button className="button secondary" type="button" onClick={onContinue}>
              Continue
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
