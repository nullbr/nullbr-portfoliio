import { useDispatch } from 'react-redux'
import { hideForm } from '../../features/portfolio/portfolioSlice'

const Form = ({ submitPortfolio }) => {
  const dispatch = useDispatch()

  return (
    <>
      <form onSubmit={submitPortfolio}>
        <header className="section-title">
          <h2>Project Information</h2>
        </header>
        <div className="form-row">
          <input type="text" placeholder="Name" id="name" name="name" />
        </div>
        <div className="form-row">
          <textarea
            placeholder="Description English"
            id="description_en"
            name="description_en"
          />
        </div>
        <div className="form-row">
          <textarea
            placeholder="Description Portuguese"
            id="description_pt"
            name="description_pt"
          />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Url" id="url" name="url" />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="GitHub"
            id="repo_url"
            name="repo_url"
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            placeholder="Position"
            id="position"
            name="position"
          />
        </div>
        <div className="form-row">
          <input type="file" placeholder="Image" id="image" name="image" />
        </div>

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
