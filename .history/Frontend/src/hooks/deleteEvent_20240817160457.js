export const deleteEvent = (id) => {
  const handleEventDeletion = () => {
    axios
      .delete(`http://localhost:3000/events/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
