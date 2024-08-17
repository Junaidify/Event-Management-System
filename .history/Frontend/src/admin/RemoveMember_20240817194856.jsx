import {} from "react";
import { useFetch } from "../hooks/useFetch";
import { Box } from "@chakra-ui/react";

const RemoveMember = () => {
  useFetch("events");
  const 
  const { data: getEvents } = useSelector((state) => state.fetch);
  const [events, setEvent] = useState({
    members: [],
  })

  const handleMemberRemove = (eventId) => {
    setEvent({
      ...event,
      members: event.members.filter((member) => member !== eventId),
    });
  };

  return (
    <div>
      <h1>Remove Member</h1>
      <Box>
        {getEvents.map((event) => (
          <div key={event.id}>
            <p>Event Name: {event.name}</p>
            <p>Event Date: {event.date}</p>
            <p>Event Time: {event.time}</p>
            <p>Event Location: {event.location}</p>
            <p>Event Description: {event.description}</p>
            <p>Event Members: {event.members}</p>
            <button onClick={() => handleMemberRemove(event.id)}>
              Remove Member
            </button>
          </div>
        ))}

      </Box>
    </div>
  );
};

export default RemoveMember;
