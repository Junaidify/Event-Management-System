import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { usePostEvent } from "../hooks/postEvent";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const EventCreate = () => {
  useFetch("authentication");
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    members: [],
  });
  const { data: getEvents } = useSelector((state) => state.fetch);

  const handleMemberAdd = (eventId) => {
    setEvent({ ...event, members: [...event.members, eventId] });
  };

  const handleMemberRemove = (eventId) => {
    setEvent({
      ...event,
      members: event.members.filter((member) => member !== eventId),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };
  const handleEventCreation = usePostEvent(event);
   
  useEffect(() => {
    handlee
  })

  useEffect(() => {
    handleEventCreation;
    setEvent({
      name: "",
      date: "",
      time: "",
      location: "",
      description: "",
      members: [],
    });
  }, []);

  return (
    <div>
      <FormControl maxW="md" mx={"auto"}>
        <Box>
          <FormLabel>Name</FormLabel>{" "}
          <Input
            value={event.name}
            type="texxt"
            name="name"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Date</FormLabel>{" "}
          <Input
            value={event.date}
            type="date"
            name="date"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Time</FormLabel>{" "}
          <Input
            value={event.time}
            type="time"
            name="time"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Location</FormLabel>{" "}
          <Input
            value={event.location}
            type="text"
            name="location"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Descrition</FormLabel>{" "}
          <Input
            value={event.description}
            type="text"
            name="description"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Members</FormLabel>
          <Text>
            {getEvents.map((event) => (
              <li key={event.id}>
                {event.name}{" "}
                <Button onClick={() => handleMemberAdd(event.id)}>Add</Button>
                <Button onClick={() => handleMemberRemove(event.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </Text>
        </Box>
        <Button onClick={handleEventCreation}>Create Event</Button>
      </FormControl>
    </div>
  );
};

export default EventCreate;
