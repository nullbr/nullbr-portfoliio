import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Loader from 'react-loaders'
import './index.scss'
import { useDispatch } from 'react-redux'
import {
  getPortfolioItems,
  setUser,
} from '../../features/portfolio/portfolioSlice'
import Form from './form'
import List from './list'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { showForm } = useSelector((store) => store.portfolio)

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
      <div className="list-container">
        <List />
      </div>
      {showForm && (
        <div className="form-container">
          <Form />
        </div>
      )}

      <Loader type="pacman" />
    </div>
  )
}

export default Dashboard
