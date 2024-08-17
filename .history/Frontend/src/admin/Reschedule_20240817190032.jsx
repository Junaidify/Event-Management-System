import {} from 'react'
import { useParams } from 'react-router-dom'

const Reschedule = () => {
    const {id} = useParams();
    const {loading, error, data: getEvents} = useSelector((state) => state.fetch);

    if(loading)

  return (
    <div>
      
    </div>
  )
}

export default Reschedule
