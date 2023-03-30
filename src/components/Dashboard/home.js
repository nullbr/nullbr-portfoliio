import { auth, storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import Form from './form'

const Home = () => {
  const submitPortfolio = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const newItem = Object.fromEntries(formData)
    const image = newItem.image
    const storageRef = ref(storage, `portfolio/${image.name}`)

    newItem.position = parseInt(newItem.position)
    newItem.image = null

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({ ...newItem, image: downloadUrl })
            e.currentTarget.reset()
          },
          (error) => {
            console.log(error)
            console.log(newItem)
          }
        )
      },
      (error) => {
        console.log(error)
        console.log(newItem)
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    try {
      await setDoc(doc(db, 'portfolio', portfolio.name), portfolio)
      alert('Successfully added to portfolio')
      window.location.reload(false)
    } catch (error) {
      console.log(error)
      alert('Failed to add portfolio')
    }
  }

  return (
    <div className="container dashboard-page">
      <Form auth={auth} submitPortfolio={submitPortfolio} />
    </div>
  )
}

export default Home
