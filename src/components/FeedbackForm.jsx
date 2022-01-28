import React, { useState, useRef } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from "uuid";

const FeedbackForm = ({ feedback, setFeedback }) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("Your input must have at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFeedback([{ id: uuidv4(), text: text, rating: rating }, ...feedback]);
    setText("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
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
