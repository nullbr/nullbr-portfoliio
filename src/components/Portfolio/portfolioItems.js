import { useAppContext } from '../../context'

const PortfolioItems = ({ portfolio }) => {
  const { t, i18n } = useAppContext()

  return (
    <div className="images-container">
      {portfolio.map((port) => {
        const { name, image, url, repo_url, description_en, description_pt } =
          port
        let description =
          i18n.language === 'en' ? description_en : description_pt

        return (
          <div className="image-box" key={port.id}>
            <img src={image} className="portfolio-image" alt="portfolio" />
            <div className="content">
              <p className="title">{name}</p>
              <h4 className="description">{description}</h4>
              <button
                hidden={url ? '' : 'hidden'}
                className="btn"
                onClick={() => window.open(url)}
              >
                {t('portfolio.view')}
              </button>
              <button
                hidden={repo_url ? '' : 'hidden'}
                className="btn"
                onClick={() => window.open(repo_url)}
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
