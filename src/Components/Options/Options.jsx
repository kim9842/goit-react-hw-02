import style from "./Options.module.css";

function Options({ updateFeedback, resetFeedback, totalPoints }) {
  return (
    <div className={style.optionsContainer}>
      <button
        className={`${style.button} ${style.good}`}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={`${style.button} ${style.neutral}`}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={`${style.button} ${style.bad}`}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalPoints > 0 && (
        <button className={style.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
