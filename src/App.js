import { useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm feedback={feedback} setFeedback={setFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} setFeedback={setFeedback} />
      </div>
    </>
  );
}

export default App;
