import { ChevronDown, ChevronUp } from '../../assets/icons/icons'
import { showForm } from '../../features/portfolio/portfolioSlice'

const List = ({ portfolioItems, isLoading, auth, dispatch }) => {
  return (
    <section className="list">
      <header className="section-title">
        <h2>your projects</h2>
      </header>
      {!isLoading &&
        portfolioItems.map((item) => {
          return <Item key={item.name} {...item} />
        })}

      <footer>
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

const Item = ({ image, name, description_en, description_pt, position }) => {
  return (
    <article className="project-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="item-description">{description_en}</h4>
        <h4 className="item-description">{description_pt}</h4>
        <div>
          <button className="delete-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      <div>
        <button className="position-btn">
          <ChevronUp />
        </button>
        <p className="position">{position}</p>
        <button className="position-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default List
