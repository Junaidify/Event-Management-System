import {} from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const getEvents = useSelector((state) => state.fetch.events);
  console.log(getEvents);
  return (
    <div>
      <h1>User Dashboard</h1>
      {JSON.stringify(getEvents)}
    </div>
  );
};

export default UserDashboard;
