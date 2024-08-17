import { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { postEvent } from "../hooks/postEvent";

const EventCreate = () => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };
  const handleEventCreation = postEvent(event);

  useEffect(() => {
    handleEventCreation;
    setEvent({
      name: "",
      date: "",
      time: "",
      location: "",
      description: "",
    })
  }, [event, handleEventCreation]);

  return (
    <div>
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel>{" "}
          <Input value={event.name} type="texxt" name="name" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Date</FormLabel>{" "}
          <Input value={event.date} type="date" name="date" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Time</FormLabel>{" "}
          <Input value={event.time} type="time" name="time" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Location</FormLabel>{" "}
          <Input type="text" name="location" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Descrition</FormLabel>{" "}
          <Input type="text" name="description" onChange={handleChange} />
        </Box>
        <Button onClick={handleEventCreation}>Create Event</Button>
      </FormControl>
    </div>
  );
};

export default EventCreate;
