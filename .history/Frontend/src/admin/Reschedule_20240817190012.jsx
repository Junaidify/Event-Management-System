import {} from 'react'
import { useParams } from 'react-router-dom'

const Reschedule = () => {
    const {id} = useParams();
    const {loading, } = useSelector((state) => state.fetch);
  return (
    <div>
      
    </div>
  )
}

export default Reschedule
