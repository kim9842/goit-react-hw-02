import s from "./Feedback.module.css";

function Feedback({ feedback, totalPoints, Percent }) {
  return (
    <div className={s.feedbackContainer}>
      <h2 className={s.feedbackTitle}>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalPoints}</p>
      <p>Positive: {Percent}%</p>
    </div>
  );
}

export default Feedback;
