import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item, feedback, setFeedback }) => {
  const { deleteItem, editFeedback } = useContext(FeedbackContext);
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteItem(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
