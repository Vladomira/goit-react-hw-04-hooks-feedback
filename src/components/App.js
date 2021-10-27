import { useState } from "react";
import Section from "./Section";
import Notification from "./Notification";
import Statistics from "./Statistics/Statistiсs";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Container from "./Container/Container";
//
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //
  const handleIncrementVote = (e) => {
    const { textContent } = e.target;
    switch (textContent) {
      case "good":
        setGood((prevS) => prevS + 1);
        break;
      case "neutral":
        setNeutral((prevS) => prevS + 1);
        break;
      case "bad":
        setBad((prevS) => prevS + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good) {
      return 0;
    }
    const positivePercentage = Math.round((good / countTotalFeedback()) * 100);
    return positivePercentage;
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleIncrementVote}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
