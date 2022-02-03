import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item, feedback, setFeedback }) => {
  const { deleteItem } = useContext(FeedbackContext);
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteItem(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
