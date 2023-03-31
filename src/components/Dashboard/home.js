import { auth, createProject, storage } from '../../firebase'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage'
import Form from './form'
import List from './list'
import { useEffect } from 'react'
import {
  getPortfolioItems,
  showForm,
  hideForm,
} from '../../features/portfolio/portfolioSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const { portfolioItems, isLoading, showForm } = useSelector(
    (store) => store.portfolio
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolioItems())
  }, [dispatch])

  const submitPortfolio = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const newItem = Object.fromEntries(formData)
    const projectImage = newItem.image

    if (!projectImage) {
      alert('Please upload an image')
      return
    }

    const storageRef = ref(storage, `portfolio/${projectImage.name}`)

    uploadBytes(storageRef, projectImage).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            createProject({ ...newItem, image: downloadUrl })
          },
          (error) => {
            console.log(error)
          }
        )
      },
      (error) => {
        console.log(error)
      }
    )

    e.currentTarget.reset()
  }

  return (
    <>
      <div className="list-container">
        <List
          auth={auth}
          portfolioItems={portfolioItems}
          isLoading={isLoading}
          dispatch={dispatch}
        />
      </div>
      {showForm && (
        <div className="form-container">
          <Form submitPortfolio={submitPortfolio} />
        </div>
      )}
    </>
  )
}

export default Home
