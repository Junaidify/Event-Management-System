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
      try {
        // Filter out the member to be removed
        const updatedMembers = event.members.filter(
          (member) => member.id !== memberId
        );

        // Update the state with the new members list
        setEvent((prevEvent) => ({
          ...prevEvent,
          members: updatedMembers,
        }));

        await axios.put(`http://localhost:3000/events/${id}`, { members: updatedMembers });

        // Optionally: Display a success message or handle further logic
      } catch (error) {
        console.error("Error removing member:", error);
        // Optionally: Display an error message
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
          {event.members.map((member) => (
            <li key={member.id}>
              {member.name}
              <button onClick={() => handleMemberRemove(member.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default RemoveMember;
