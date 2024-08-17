import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const RemoveMember = () => {
  useFetch("events");
  const { id } = useParams();
  const { data: getEvents } = useSelector((state) => state.fetch);
  const [event, setEvent] = useState(getEvents);
 
useEffect(() => {
       
})
  

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
