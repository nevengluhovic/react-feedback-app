import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, setFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return <h1>No results</h1>;
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem
          setFeedback={setFeedback}
          feedback={feedback}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
