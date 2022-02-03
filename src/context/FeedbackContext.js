import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Initial state on refresh
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from a context",
      rating: 10,
    },
    {
      id: 2,
      text: "This is from a contextttttttttttttt",
      rating: 4,
    },
  ]);

  // Deleting item from the feedback list
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    feedbackEdit.edit = false;
  };

  // Adding item to the feedback list
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Edit feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: { rating: 10 },
    edit: false,
  });

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //Update Feedback

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteItem,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
