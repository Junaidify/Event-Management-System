import {} from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const UserDashboard = () => {   
  const getEvents = useSelector((state) => state.fetch.data);
  useFetch();
  return (
    <div>
      <h1>User Dashboard</h1>
      <<Grid>
        {data.map((item))}
      </Grid>
    </div>
  );
};

export default UserDashboard;
