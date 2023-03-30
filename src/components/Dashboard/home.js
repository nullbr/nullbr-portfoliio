import { auth, uploadImage, createProject } from '../../firebase'
import Form from './form'

const Home = () => {
  const submitPortfolio = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const newItem = Object.fromEntries(formData)
    const downloadUrl = uploadImage(newItem.image)

    if (createProject({ ...newItem, image: downloadUrl })) {
      e.currentTarget.reset()
    }
  }

  return (
    <>
      <div className="buttons-container">buttons</div>
      <div className="form-container">
        <Form auth={auth} submitPortfolio={submitPortfolio} />
      </div>
    </>
  )
}

export default Home
