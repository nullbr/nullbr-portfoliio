import { auth, storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import Loader from 'react-loaders'

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
      window.location.reload(false)
      alert('Successfully added to portfolio')
    } catch (error) {
      console.log(error)
      alert('Failed to add portfolio')
    }
  }

  return (
    <div className="container dashboard-page">
      <form onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" id="name" name="name" />
        </p>
        <p>
          <textarea
            placeholder="Description English"
            id="description_en"
            name="description_en"
          />
        </p>
        <p>
          <textarea
            placeholder="Description Portuguese"
            id="description_pt"
            name="description_pt"
          />
        </p>
        <p>
          <input type="text" placeholder="Url" id="url" name="url" />
        </p>
        <p>
          <input
            type="text"
            placeholder="GitHub"
            id="repo_url"
            name="repo_url"
          />
        </p>
        <p>
          <input type="file" placeholder="Image" id="image" name="image" />
        </p>
        <p>
          <input
            type="number"
            placeholder="Position"
            id="position"
            name="position"
          />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  )
}

export default Home
