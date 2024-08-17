import {} from 'react'
import { useSelector } from 'react-redux'

const userDashboard = () => {
    const events = useSelector(state => state.fetch)
  return (
    <div>
      
    </div>
  )
}

export default userDashboard
