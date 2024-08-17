import { Box, FormLabel, Input } from '@chakra-ui/react'
import {} from 'react'

const FeedbackRating = () => {
  return (
    <div>
        <Box>
          <FormLabel></FormLabel>
          <Input
            value={event.date}
            type="date"
            name="date"
            onChange={handleChange}
          />
        </Box>
      
    </div>
  )
}

export default FeedbackRating
