import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  editItem,
  hideForm,
} from '../../features/portfolio/portfolioSlice'
import { storage } from '../../firebase'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage'
import { v4 as uuid } from 'uuid'

const Form = () => {
  const dispatch = useDispatch()
  const { formData } = useSelector((store) => store.portfolio)

  const saveItem = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const item = { ...Object.fromEntries(formData), id: uuid() }
    const imageFile = item.image_file
    console.log(item)
    delete item['image_file']

    const storageRef = ref(storage, `portfolio/${imageFile.name}`)

    if (!item.image && !imageFile.name) {
      alert('Please upload an image')
      return
    } else if (imageFile.name !== '') {
      console.log('upload')
      uploadBytes(storageRef, imageFile).then(
        (snapshot) => {
          getDownloadURL(snapshot.ref).then(
            (downloadUrl) => {
              item.image = downloadUrl
              addOrEdit(item)
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
    } else {
      console.log('no upload')
      addOrEdit(item)
    }

    e.currentTarget.reset()
  }

  const addOrEdit = (item) => {
    if (formData !== {}) {
      dispatch(editItem(item))
    } else {
      dispatch(addItem(item))
    }
  }

  return (
    <>
      <form onSubmit={saveItem}>
        <header className="section-title">
          <h2>Project Information</h2>
        </header>

        <div className="form-row">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            defaultValue={formData.name}
          />
        </div>
        <div className="form-row">
          <textarea
            placeholder="Description English"
            id="description_en"
            name="description_en"
            defaultValue={formData.description_en}
          />
        </div>
        <div className="form-row">
          <textarea
            placeholder="Description Portuguese"
            id="description_pt"
            name="description_pt"
            defaultValue={formData.description_pt}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="Url"
            id="url"
            name="url"
            defaultValue={formData.url}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="GitHub"
            id="repo_url"
            name="repo_url"
            defaultValue={formData.repo_url}
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            placeholder="Position"
            id="position"
            name="position"
            defaultValue={formData.position}
          />
        </div>
        <div className="form-row">
          <input
            type="file"
            placeholder="Image"
            id="image_file"
            name="image_file"
          />
        </div>

        <input
          hidden="hidden"
          type="text"
          id="image"
          name="image"
          defaultValue={formData.image}
        />

        <button className="flat-button action-button" type="submit">
          save
        </button>
        <button
          className="flat-button action-button"
          type="button"
          onClick={() => dispatch(hideForm())}
        >
          cancel
        </button>
      </form>
    </>
  )
}
export default Form
