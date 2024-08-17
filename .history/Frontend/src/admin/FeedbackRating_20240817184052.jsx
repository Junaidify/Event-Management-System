import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const FeedbackRating = ({ eventId }) => { 
  const [feedback, setFeedback] = useState(""); 

  const handleFeedback = async () => {
    try {
      await axios.post("http://localhost:3000/feedback", { eventId, feedback });
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
        <Button mt={2} colorScheme="teal" onClick={handleFeedback}>Submit</Button>
      </Box>
    </div>
  );
};

export default FeedbackRating;
