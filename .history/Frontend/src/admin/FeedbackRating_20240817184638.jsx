import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FeedbackRating = () => {
  const { id } = useParams(); // Extract eventId from route params
  const [feedback, setFeedback] = useState("");

  const handleFeedback = async () => {
    try {
      await axios.post("http://localhost:3000/feedback", { eventId: id, feedback });
      alert("Feedback submitted successfully!");
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  return (
    <div>
      <Box>
        <FormLabel>Feedback</FormLabel>
        <Input
          value={feedback}
          placeholder="Enter your feedback"
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button mt={2} colorScheme="teal" onClick={handleFeedback}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default FeedbackRating;
