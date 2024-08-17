import {} from "react";
import { useFetch } from "../hooks/useFetch";

const RemoveMember = () => {
  useFetch("events");
  const {}

  const handleMemberRemove = (eventId) => {
    setEvent({
      ...event,
      members: event.members.filter((member) => member !== eventId),
    });
  };

  return <div>

  </div>;
};

export default RemoveMember;
