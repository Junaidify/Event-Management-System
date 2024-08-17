import { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";

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

  const handleEventCreation = () => {
    if (event.name.trim() === "") {
      alert("Name is required");
      return;
    }

    if (event.date.trim() === "") {
      alert("Date is required");
      return;
    }

    if (event.time.trim() === "") {
      alert("Time is required");
      return;
    }

    if (event.location.trim() === "") {
      alert("Location is required");
      return;
    }

    if (event.description.trim() === "") {
      alert("Description is required");
      return;
    }


  };


  return (
    <div>
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel>{" "}
          <Input type="texxt" name="name" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Date</FormLabel>{" "}
          <Input type="date" name="date" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Time</FormLabel>{" "}
          <Input type="time" name="time" onChange={handleChange} />
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
