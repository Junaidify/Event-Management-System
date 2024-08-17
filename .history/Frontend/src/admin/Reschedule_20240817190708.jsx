import {
    Button,
    Card,
    CardHeader,
    Heading,
    SimpleGrid,
  } from "@chakra-ui/react";
  import { useSelector } from "react-redux";
  import { useParams } from "react-router-dom";
  
  const Reschedule = () => {
    const { id } = useParams();
    const {
      loading,
      error,
      data: getEvents,
    } = useSelector((state) => state.fetch);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    // Find the event with the matching id
    const event = getEvents.find((event) => event.id === id);
  
    return (
      <div>
        {event ? (
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card key={event.id}>
              <CardHeader>
                <Heading size="md">Event Details</Heading>
              </CardHeader>
              {/* Render event details here if needed */}
              <Button
                colorScheme="blue"
                // onClick={() => handleEventClick(event.id)}
              >
                Feedback/Rating
              </Button>
            </Card>
          </SimpleGrid>
        ) : (
          <p>No event found.</p>
        )}
      </div>
    );
  };
  
  export default Reschedule;
  