import {
  Button,
  Card,
  CardHeader,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import {} from "react";
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

  return (
    <div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {getEvents.filter((event) => {
          if (event.id === id) {
            return (
                
            )
        }
        
        )}
      </SimpleGrid>
    </div>
  );
};

export default Reschedule;
