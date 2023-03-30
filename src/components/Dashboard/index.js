import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './home'
import Login from '../Login'
import Loader from 'react-loaders'
import './index.scss'

const Dashboard = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <div className="container dashboard-page">
      {user ? <Home /> : <Login />}
      <Loader type="pacman" />
    </div>
  )
}

export default Dashboard
