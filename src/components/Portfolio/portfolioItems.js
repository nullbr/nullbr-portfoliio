import { useAppContext } from '../../context'

const PortfolioItems = ({ portfolio }) => {
  const { t, i18n } = useAppContext()

  var sortedPortfolio = Array(portfolio.length)
  portfolio.forEach((item) => {
    sortedPortfolio[item.position] = item
  })

  return (
    <div className="images-container">
      {sortedPortfolio.map((port, idx) => {
        let description =
          i18n.language === 'en' ? port.description_en : port.description_pt

        return (
          <div className="image-box" key={idx}>
            <img src={port.image} className="portfolio-image" alt="portfolio" />
            <div className="content">
              <p className="title">{port.name}</p>
              <h4 className="description">{description}</h4>
              <button
                hidden={port.url ? '' : 'hidden'}
                className="btn"
                onClick={() => window.open(port.url)}
              >
                {t('portfolio.view')}
              </button>
              <button
                hidden={port.repo_url ? '' : 'hidden'}
                className="btn"
                onClick={() => window.open(port.repo_url)}
              >
                {t('portfolio.github')}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PortfolioItems
