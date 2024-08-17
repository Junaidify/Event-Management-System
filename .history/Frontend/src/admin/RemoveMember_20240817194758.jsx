import {} from "react";
import { useFetch } from "../hooks/useFetch";
import { Box } from "@chakra-ui/react";

const RemoveMember = () => {
  useFetch("events");
  const { data: getEvents } = useSelector((state) => state.fetch);

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

      </Box>
    </div>
  );
};

export default RemoveMember;
