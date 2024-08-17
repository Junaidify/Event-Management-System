import {} from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const UserDashboard = () => {
    useFetch();
  const getEvents = useSelector((state) => state.fetch.data);
  console.log(getEvents);
  return (
    <div>
      <h1>User Dashboard</h1>
      {JSON.stringify(getEvents)}
    </div>
  );
};

export default UserDashboard;
