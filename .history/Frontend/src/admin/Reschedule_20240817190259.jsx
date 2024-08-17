import { Button, Card, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react';
import {} from 'react'
import { useParams } from 'react-router-dom'

const Reschedule = () => {
    const {id} = useParams();
    const {loading, error, data: getEvents} = useSelector((state) => state.fetch);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;


  return (
    <div>
        <SimpleGrid
           spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {getEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <Heading size="md">Event Details</Heading>
            </CardHeader>
           
              <Button
                colorScheme="blue"
                onClick={() => handleEventClick(event.id)}
              >
                Feedback/Rating
              </Button>
        
          </Card>
        ))}
      </SimpleGrid>
      
    </div>
  )
}

export default Reschedule
