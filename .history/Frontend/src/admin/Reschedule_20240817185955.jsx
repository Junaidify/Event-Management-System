import {} from 'react'
import { useParams } from 'react-router-dom'

const Reschedule = () => {
    const {id} = useParams();
    const getEvents = useSelector((state) => state.fetch);
  return (
    <div>
      
    </div>
  )
}

export default Reschedule
