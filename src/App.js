import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <FeedbackForm feedback={feedback} setFeedback={setFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} setFeedback={setFeedback} />
              </>
            }
          />

          <Route />

          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
