import {} from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { Card, Grid, SimpleGrid } from "@chakra-ui/react";

const UserDashboard = () => {   
  const getEvents = useSelector((state) => state.fetch.data);
  useFetch();
  return (
    <div>
      <h1>User Dashboard</h1>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {getEvents.map((event) => (
         
          <Card>
            <CardHeader>
              <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>

        ))}
      </SimpleGrid>
    </div>
  );
};

export default UserDashboard;
