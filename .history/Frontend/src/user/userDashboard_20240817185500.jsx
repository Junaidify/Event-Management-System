import { useNavigate } from "react-router-dom";
import {
  Button,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const UserDashboard = () => {
  const navigate = useNavigate();
  const {
    data: getEvents,
    isLoading,
    error,
  } = useSelector((state) => state.fetch);
  useFetch();

  const handleEventClick = (eventId) => {
    navigate(`/feedback/${eventId}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Heading as="h1" size="lg" mb={4}>
        User Dashboard
      </Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {getEvents.map((event) => (
          <Card key={event.id}>
             <Button onClick={() => handleReschedule()
            <CardHeader>
              <Heading size="md">Event Details</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                colorScheme="blue"
                onClick={() => handleEventClick(event.id)}
              >
                Feedback/Rating
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default UserDashboard;
