import axios from "axios";
import NotificationPop from "../admin/NotificationPop";

export const usePostEvent = (event) => {
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

    axios
      .post("http://localhost:3000/events", event)
      .then((res) => {
        console.log(res);
      set
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return handleEventCreation;
};
