import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const RemoveMember = () => {
  useFetch("events");
  const { id } = useParams();
  const { data: getEvents } = useSelector((state) => state.fetch);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const selectedEvent = getEvents.find((item) => item.id === id);
    setEvent(selectedEvent);
  }, [id, getEvents]);

  // const handleMemberRemove = (memberId) => {
  //   if (event) {
  //     const updatedMembers = event.members.filter(
  //       (member, idx) => idx !== memberId
  //     );
  //     setEvent((prevEvent) => ({
  //       ...prevEvent,
  //       members: updatedMembers,
  //     }));
  //   }
  // };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h1>Remove Member</h1>
      <Box>
        <p>Event Name: {event.name}</p>
        <p>Event Date: {event.date}</p>
        <p>Event Time: {event.time}</p>
        <p>Event Location: {event.location}</p>
        <p>Event Description: {event.description}</p>
        <p>Event Members:</p>
        <ul>
       {event.members.map(member => (

       )
         
       )}
        </ul>
      </Box>
    </div>
  );
};

export default RemoveMember;
