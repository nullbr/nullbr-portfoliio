import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './home'
import Loader from 'react-loaders'
import './index.scss'
import { useDispatch } from 'react-redux'
import {
  getPortfolioItems,
  setUser,
} from '../../features/portfolio/portfolioSlice'

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      user ? dispatch(setUser(user.uid)) : dispatch(setUser(null))
    })
  }, [dispatch])

  useEffect(() => {
    dispatch(getPortfolioItems())
  }, [dispatch])

  return (
    <div className="container dashboard-page">
      <Home />
      <Loader type="pacman" />
    </div>
  )
}

export default Dashboard
