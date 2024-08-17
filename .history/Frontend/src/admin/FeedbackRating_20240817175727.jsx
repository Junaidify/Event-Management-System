import { Box, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

const FeedbackRating = (eventId) => {
    const [event, setEvent] = useState("");
    const getEvents = useSelector((state) => state.fetch.data);

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
        </Box>
      
    </div>
  )
}

export default FeedbackRating
