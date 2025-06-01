import { useState, useEffect } from "react";

import Description from "./Components/Description/Description";
import Feedback from "./Components/Feedback/Feedback";
import Options from "./Components/Options/Options";
import Notifications from "./Components/Notification/Notification";
const FEEDBACK_STORAGE_KEY = "feedbackData";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalPoints = feedback.good + feedback.neutral + feedback.bad;

  const Percent =
    totalPoints > 0 ? Math.round((feedback.good / totalPoints) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalPoints={totalPoints}
      />
      {totalPoints > 0 ? (
        <Feedback
          feedback={feedback}
          totalPoints={totalPoints}
          Percent={Percent}
        />
      ) : (
        <Notifications message="No feedback yet" />
      )}
    </>
  );
}

export default App;
