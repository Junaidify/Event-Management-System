import { Box, FormLabel, Input } from '@chakra-ui/react'
import {} from 'react'

const FeedbackRating = () => {
    const [event, setEvent] = useState()
  return (
    <div>
        <Box>
          <FormLabel>UserName</FormLabel>
          <Input
            value={event.date}
            type="date"
            name="date"
            onChange={(e) => setEvent(e.target.value)}
          />
        </Box>
      
    </div>
  )
}

export default FeedbackRating
