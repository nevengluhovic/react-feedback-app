import React from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, feedback, setFeedback }) => {
  const deleteItem = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((el) => el.id !== item.id));
    }
  };
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button onClick={deleteItem} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
