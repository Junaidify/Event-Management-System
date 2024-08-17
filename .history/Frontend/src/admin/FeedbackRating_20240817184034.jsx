import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const FeedbackRating = ({ eventId }) => { // Destructure eventId from props
  const [feedback, setFeedback] = useState(""); // Renamed `event` to `feedback` for clarity

  const handleFeedback = async () => {
    try {
      await axios.post("http://localhost:3000/feedback", { eventId, feedback });
      // Optionally handle success here, e.g., show a success message
    } catch (err) {
      console.error("Error submitting feedback:", err);
      // Optionally handle error here, e.g., show an error message
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
