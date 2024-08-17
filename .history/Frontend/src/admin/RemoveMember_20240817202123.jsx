import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const RemoveMember = () => {
  useFetch("events");
  const { id } = useParams();
  const { data: getEvents } = useSelector((state) => state.fetch);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const selectedEvent = getEvents.find((item) => item.id === id);
    setEvent(selectedEvent);
  }, [id, getEvents]);

  const handleMemberRemove = async (memberId) => {
    if (event) {
      // Filter out the member by index
      const updatedMembers = event.members.filter((_, idx) => idx !== memberId);

      // Update the event state
      setEvent((prevEvent) => ({
        ...prevEvent,
        members: updatedMembers,
      }));

      // Send update request to server
      try {
        await axios.put(`http://localhost:3000/events/${id}`, {
          ...event,
          members: updatedMembers,
        });
      } catch (error) {
        console.error("Error updating event:", error);
      }
    }
  };

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
          {event.members.map((member, idx) => (
            <li key={idx}>
              {typeof member === 'object' ? member.name : member} {/* Adjust based on actual member structure */}
              <button onClick={() => handleMemberRemove(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default RemoveMember;
