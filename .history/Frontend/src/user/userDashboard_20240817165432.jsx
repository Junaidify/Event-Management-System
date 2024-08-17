import {} from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { Grid } from "@chakra-ui/react";

const UserDashboard = () => {   
  const getEvents = useSelector((state) => state.fetch.data);
  useFetch();
  return (
    <div>
      <h1>User Dashboard</h1>
      <Grid>
        {data.map((event) => (
          <Card key={event.id} event={event} />

        ))}
      </Grid>
    </div>
  );
};

export default UserDashboard;
