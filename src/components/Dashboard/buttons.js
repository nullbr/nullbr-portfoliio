import {
  showAddForm,
  deleteAll,
  notModified,
} from '../../features/portfolio/portfolioSlice'
import { auth, createProject } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithGoogle } from '../../firebase'

const Buttons = () => {
  const dispatch = useDispatch()
  const { portfolioItems, isModified, user } = useSelector(
    (store) => store.portfolio
  )

  const saveChanges = () => {
    portfolioItems.forEach((item) => {
      if (createProject(item)) {
        dispatch(notModified())
      }
    })
  }

  return (
    <>
      {isModified && user && (
        <button
          className="flat-button action-button"
          type="button"
          onClick={() => saveChanges()}
        >
          Save Changes
        </button>
      )}
      <button
        className="flat-button action-button"
        type="button"
        onClick={() => dispatch(showAddForm())}
      >
        Add Project
      </button>
      {portfolioItems.length > 0 && (
        <button
          className="flat-button action-button"
          type="button"
          onClick={() => dispatch(deleteAll())}
        >
          Delete All
        </button>
      )}
      {user ? (
        <button
          className="flat-button action-button"
          onClick={() => auth.signOut()}
        >
          Sign out
        </button>
      ) : (
        <button
          className="flat-button action-button"
          onClick={signInWithGoogle}
        >
          Log in
        </button>
      )}
    </>
  )
}
export default Buttons
