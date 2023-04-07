import { ChevronDown, ChevronUp } from '../../../public/icons/icons'
import {
  moveDown,
  moveUp,
  showEditForm,
  sortPortfolio,
  deleteItem,
} from '../../features/portfolio/portfolioSlice'
import { useDispatch, useSelector } from 'react-redux'

const Item = ({
  idx,
  id,
  image,
  name,
  description_en,
  description_pt,
  position,
}) => {
  const dispatch = useDispatch()
  const { itemsCount } = useSelector((store) => store.portfolio)

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
          <button
            className="delete-btn"
            type="button"
            onClick={() => dispatch(deleteItem(id))}
          >
            Delete
          </button>
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

export default Item
