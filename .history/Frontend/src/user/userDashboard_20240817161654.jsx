import {} from 'react'
import { useSelector } from 'react-redux'

const UserDashboard = () => {
    const events = useSelector(state => state.fetch.events);
  return (
    <div>
      
    </div>
  )
}

export default userDashboard
