import {} from "react";
import { useFetch } from "../hooks/useFetch";

const RemoveMember = () => {
  useFetch("events");
  const { data: getEvents } = useSelector((state) => state.fetch);

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
