import { useDispatch, useSelector } from 'react-redux'
import { ChevronDown, ChevronUp } from '../../assets/icons/icons'
import {
  moveDown,
  moveUp,
  showEditForm,
  sortPortfolio,
  notModified,
} from '../../features/portfolio/portfolioSlice'
import { createProject } from '../../firebase'

const List = ({ auth }) => {
  const { portfolioItems, isLoading, showForm, itemsCount, isModified } =
    useSelector((store) => store.portfolio)
  const dispatch = useDispatch()

  const saveChanges = () => {
    portfolioItems.forEach((item) => {
      if (createProject({ ...item.data })) {
        dispatch(notModified())
      }
    })
  }

  return (
    <section className="list">
      <header className="section-title">
        <h2>your projects</h2>
      </header>
      {!isLoading &&
        portfolioItems.map((item, idx) => {
          return (
            <Item
              key={item.id}
              idx={idx}
              {...item.data}
              dispatch={dispatch}
              itemsCount={itemsCount}
            />
          )
        })}

      <footer>
        {isModified && (
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
          onClick={() => dispatch(showForm())}
        >
          Add Project
        </button>
        <button className="flat-button action-button">Delete All</button>
        <button
          className="flat-button action-button"
          onClick={() => auth.signOut()}
        >
          Sign out
        </button>
      </footer>
    </section>
  )
}

const Item = ({
  idx,
  image,
  name,
  description_en,
  description_pt,
  position,
  dispatch,
  itemsCount,
}) => {
  return (
    <article className="project-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-description">{description_en}</h4>
        <h4 className="item-description">{description_pt}</h4>
        <div>
          <button
            className="delete-btn"
            type="button"
            onClick={() => dispatch(showEditForm(idx))}
          >
            Edit
          </button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      <div>
        <button
          className="position-btn"
          type="button"
          onClick={() => {
            dispatch(moveUp(idx))
            dispatch(moveDown(idx - 1))
            dispatch(sortPortfolio())
          }}
          hidden={parseInt(position) === 1}
        >
          <ChevronUp />
        </button>
        <p className="position">{position}</p>
        <button
          className="position-btn"
          onClick={() => {
            dispatch(moveDown(idx))
            dispatch(moveUp(idx + 1))
            dispatch(sortPortfolio())
          }}
          hidden={parseInt(position) === itemsCount}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default List
