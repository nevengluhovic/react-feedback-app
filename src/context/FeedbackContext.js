import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Initial state on refresh
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Edit feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: { rating: 10 },
    edit: false,
  });

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const getFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Getting all data from the JSON server
  useEffect(() => {
    getFeedback();
  }, []);

  // Adding item to the feedback list
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // Deleting item from the feedback list
  const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    feedbackEdit.edit = false;
  };

  //Update Feedback

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // Saving to LocalStorage
  // const saveToLocal = () => {
  //   localStorage.setItem("feedback", JSON.stringify(feedback));
  // };

  // const getLocalItems = () => {
  //   if (localStorage.getItem("feedback") === null) {
  //     localStorage.setItem("feedback", JSON.stringify([]));
  //   } else {
  //     let feedbackLocal = JSON.parse(localStorage.getItem("feedback"));
  //     setFeedback(feedbackLocal);
  //   }
  // };

  // useEffect(() => {
  //   getLocalItems();
  // }, []);

  // useEffect(() => {
  //   saveToLocal();
  // }, [feedback]);
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
