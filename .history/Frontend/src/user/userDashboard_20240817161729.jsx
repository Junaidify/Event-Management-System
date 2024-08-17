import {} from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const events = useSelector((state) => state.fetch.events);
  return <div>
    <h1>User Dashboard</h1>
    {events}
  </div>;
};

export default UserDashboard;
