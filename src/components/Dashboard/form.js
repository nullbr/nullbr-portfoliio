import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  editItem,
  hideForm,
  sortPortfolio,
  toggleLoading,
} from '../../features/portfolio/portfolioSlice'
import { storage } from '../../firebase'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage'

const Form = () => {
  const dispatch = useDispatch()
  const { formData, itemsCount } = useSelector((store) => store.portfolio)

  const saveItem = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const item = Object.fromEntries(formData)
    const imageFile = item.image_file
    const storageRef = ref(storage, `portfolio/${imageFile.name}`)

    delete item['image_file']

    if (!item.image && !imageFile.name) {
      alert('Please upload an image')
      return
    } else if (imageFile.name !== '') {
      dispatch(toggleLoading())
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
      dispatch(toggleLoading())
    } else {
      addOrEdit(item)
    }

    e.currentTarget.reset()
  }

  const addOrEdit = (item) => {
    if (Object.keys(formData).length === 0 && formData.constructor === Object) {
      console.log('add')
      dispatch(addItem(item))
    } else {
      console.log('edit')
      dispatch(editItem(item))
    }
    dispatch(sortPortfolio())
  }

  return (
    <>
      <form onSubmit={saveItem}>
        <header className="section-title">
          <h2>Project Information</h2>
        </header>

        <input
          hidden="hidden"
          type="text"
          id="id"
          name="id"
          defaultValue={formData.id}
        />

        <div className="form-row">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            defaultValue={formData.name}
            required
          />
        </div>
        <div className="form-row">
          <textarea
            placeholder="Description English"
            id="description_en"
            name="description_en"
            defaultValue={formData.description_en}
            required
          />
        </div>
        <div className="form-row">
          <textarea
            placeholder="Description Portuguese"
            id="description_pt"
            name="description_pt"
            defaultValue={formData.description_pt}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="Url"
            id="url"
            name="url"
            defaultValue={formData.url}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="GitHub"
            id="repo_url"
            name="repo_url"
            defaultValue={formData.repo_url}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            placeholder="Position"
            id="position"
            name="position"
            defaultValue={formData.position || itemsCount + 1}
            max={itemsCount + 1}
            min="1"
            required
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
