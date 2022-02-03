import { useState, createContext } from "react";

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

  // Deleting item from the list
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteItem }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
