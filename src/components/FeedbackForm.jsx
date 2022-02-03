import React, { useState, useEffect, useRef } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { feedback, addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const inputRef = useRef("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 9) {
      setMessage("Your input must have at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
      setRating(feedbackEdit.item.rating);
      inputRef.current.focus();
    }
  }, [feedbackEdit]);

  useEffect(() => {
    setText("");
  }, [feedback]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newFeedback = { text, rating };
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    feedbackEdit.edit = false;
    setBtnDisabled(true);
    // setRating(10);
    setText("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            ref={inputRef}
            type="text"
            onChange={handleTextChange}
            value={text}
            placeholder="Write a review"
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
};

export default FeedbackForm;
