import { Box, Button, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react'
import { useSelector } from 'react-redux';



const FeedbackRating = (eventId) => {
    const [event, setEvent] = useState("");
    const getEvents = useSelector((state) => state.fetch.data);

    const handleFeedback = () => {
      axios.post("http://localhost:3000/feedback", { eventId, event });
    }

  return (
    <div>
        <Box>
          <FormLabel>UserName</FormLabel>
          <Input
            value={event}
            type="date"
            name="date"
            onChange={(e) => setEvent(e.target.value)}
          />
      
          <Button onClick={handleFeedback}>Submit</Button>
        </Box>
      
    </div>
  )
}

export default FeedbackRating
