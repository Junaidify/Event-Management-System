
export const deleteEvent = (id) => {

    const handleEventDeletion = () => {
        axios
            .delete(`http://localhost:3000/events/${id}`)
}