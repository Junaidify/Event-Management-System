import {} from 'react'

const FeedbackRating = () => {
  return (
    <div>
        <Box>
          <FormLabel>Date</FormLabel>{" "}
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
