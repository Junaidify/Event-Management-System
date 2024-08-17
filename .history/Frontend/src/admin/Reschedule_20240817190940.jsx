import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Reschedule = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: getEvents, error } = useSelector((state) => state.fetch);
  const [event, setEvent] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Find the event with the matching id
    const selectedEvent = getEvents.find((event) => event.id === id);
    if (selectedEvent) {
      setEvent(selectedEvent);
      setDate(selectedEvent.date || "");
      setTime(selectedEvent.time || "");
    }
  }, [id, getEvents]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/events/${id}`, { date, time });
      // Optionally handle success here
      navigate('/events'); // Redirect after saving
    } catch (err) {
      console.error("Error updating event:", err);
    }
  };

  if (!event) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <VStack spacing={4} align="stretch" maxW="md" mx="auto">
        <FormLabel>Event Date</FormLabel>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <FormLabel>Event Time</FormLabel>
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSave}>
          Save Changes
        </Button>
        <Button onClick={() => navigate('/events')}>
          Cancel
        </Button>
      </VStack>
    </div>
  );
};

export default Reschedule;
