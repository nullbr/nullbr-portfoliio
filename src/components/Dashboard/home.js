import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'

const Home = () => {
  const form = useRef()

  const submitPortfolio = (e) => {
    e.preventDefault()
    const name = form.current[0]?.value
    const description_en = form.current[1]?.value
    const description_pt = form.current[2]?.value
    const url = form.current[3]?.value
    const repo_url = form.current[4]?.value
    const image = form.current[5]?.files[0]
    const position = parseInt(form.current[6]?.value)

    const storageRef = ref(storage, `portfolio/${image.name}`)

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              description_en,
              description_pt,
              url,
              repo_url,
              image: downloadUrl,
              position,
            })
          },
          (error) => {
            console.log(error)
            savePortfolio({
              name,
              description_en,
              description_pt,
              url,
              repo_url,
              image: null,
              position,
            })
          }
        )
      },
      (error) => {
        console.log(error)
        savePortfolio({
          name,
          description_en,
          description_pt,
          url,
          repo_url,
          image: null,
          position,
        })
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    try {
      await setDoc(doc(db, 'portfolio', portfolio.name), portfolio)
      window.location.reload(false)
    } catch (error) {
      console.log(error)
      alert('Failed to add portfolio')
    }
  }

  return (
    <div className="container dashboard-page">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <textarea placeholder="Description English" />
        </p>
        <p>
          <textarea placeholder="Description Portuguese" />
        </p>
        <p>
          <input type="text" placeholder="Url" />
        </p>
        <p>
          <input type="text" placeholder="GitHub" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <p>
          <input type="number" placeholder="Position" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  )
}

export default Home
