type QuestCardProps = {
  title: string;
  difficulty: number;
  concept: string;
  rewardGold: number;
};

export function QuestCard({ title, difficulty, concept, rewardGold }: QuestCardProps) {
  return (
    <article className="quest-card">
      <div>
        <p className="quest-label">Starter Quest</p>
        <h2>{title}</h2>
      </div>
      <p>
        The blacksmith's best hammer has gone missing beneath a stack of dusty ledgers. A short
        practice task should help trace where it landed.
      </p>
      <dl className="quest-details">
        <div>
          <dt>Difficulty</dt>
          <dd aria-label={`${difficulty} star difficulty`}>{'★'.repeat(difficulty)}</dd>
        </div>
        <div>
          <dt>Concept</dt>
          <dd>{concept}</dd>
        </div>
        <div>
          <dt>Reward</dt>
          <dd>{rewardGold} gold</dd>
        </div>
      </dl>
      <button className="button primary" type="button">
        Accept Quest
      </button>
    </article>
  );
}
