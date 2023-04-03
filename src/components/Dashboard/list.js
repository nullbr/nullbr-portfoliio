import { useSelector } from 'react-redux'
import Buttons from './buttons'
import Item from './item'

const List = () => {
  const { portfolioItems, isLoading } = useSelector((store) => store.portfolio)

  // console.log(portfolioItems.length())/

  return (
    <section className="list">
      <header className="section-title">
        <h2>your projects</h2>
      </header>
      {!isLoading &&
        portfolioItems.map((item, idx) => {
          return <Item key={item.id} idx={idx} {...item} />
        })}

      <footer>
        <Buttons />
      </footer>
    </section>
  )
}

export default List
