import { useState } from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const EventCreate = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState({
    
  })

  const handleChange = (e) => {
    const {name, value} = e.target;


  }

  return (
    <div>
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel> <Input type="texxt" name="name" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Date</FormLabel> <Input type="date" name="date" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Time</FormLabel> <Input type="time" name="time" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Location</FormLabel> <Input type="text" name="location" onChange={handleChange} />
        </Box>
        <Box>
          <FormLabel>Descrition</FormLabel> <Input type="text" name="description" onChange={handleChange} />
        </Box>
      </FormControl>
    </div>
  );
};

export default EventCreate;
