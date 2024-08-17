
export const rescheduleEvent = (id) => {
    const handleEventReschedule = () => {
        axios
            .put(`http://localhost:3000/events/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return handleEventReschedule;