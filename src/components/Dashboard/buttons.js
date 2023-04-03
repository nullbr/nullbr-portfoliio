import {
  showAddForm,
  deleteAll,
  notModified,
  toggleLoading,
} from '../../features/portfolio/portfolioSlice'
import { auth, createProject, deleteProject } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithGoogle } from '../../firebase'

const Buttons = () => {
  const dispatch = useDispatch()
  const { portfolioItems, isModified, user, deletedItems } = useSelector(
    (store) => store.portfolio
  )

  const saveChanges = () => {
    dispatch(toggleLoading())
    portfolioItems.forEach((item) => {
      createProject(item)
    })
    deletedItems.forEach((item) => {
      deleteProject(item)
    })
    dispatch(notModified())
    dispatch(toggleLoading())
  }

  return (
    <>
      {user && (
        <button
          className="flat-button action-button"
          type="button"
          onClick={() => dispatch(showAddForm())}
        >
          Add Project
        </button>
      )}
      {user && portfolioItems.length > 0 && (
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
      {isModified && user && (
        <button
          className="flat-button action-button"
          type="button"
          onClick={() => saveChanges()}
        >
          Save Changes
        </button>
      )}
    </>
  )
}
export default Buttons
