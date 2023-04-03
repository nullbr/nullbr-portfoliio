import Form from './form'
import List from './list'
import { useSelector } from 'react-redux'

const Home = () => {
  const { showForm } = useSelector((store) => store.portfolio)

  // const submitPortfolio = (e) => {
  //   e.preventDefault()

  //   const formData = new FormData(e.currentTarget)
  //   const newItem = Object.fromEntries(formData)
  //   const projectImage = newItem.image

  //   if (!projectImage) {
  //     alert('Please upload an image')
  //     return
  //   }

  //   const storageRef = ref(storage, `portfolio/${projectImage.name}`)

  //   uploadBytes(storageRef, projectImage).then(
  //     (snapshot) => {
  //       getDownloadURL(snapshot.ref).then(
  //         (downloadUrl) => {
  //           createProject({
  //             ...newItem,
  //             image: downloadUrl,
  //             position: parseInt(newItem.position),
  //           })
  //           dispatch(getPortfolioItems())
  //           dispatch(hideForm())
  //         },
  //         (error) => {
  //           console.log(error)
  //         }
  //       )
  //     },
  //     (error) => {
  //       console.log(error)
  //     }
  //   )

  //   e.currentTarget.reset()
  // }

  const saveItem = () => {}

  return (
    <>
      <div className="list-container">
        <List />
      </div>
      {showForm && (
        <div className="form-container">
          <Form saveItem={saveItem} />
        </div>
      )}
    </>
  )
}

export default Home
