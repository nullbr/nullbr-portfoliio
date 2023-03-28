import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { useAppContext } from '../Layout'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])
  const { t, i18n } = useAppContext()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderPortfolio = (portfolio) => {
    var sortedPortfolio = Array(portfolio.length)
    portfolio.forEach((item, idx) => {
      sortedPortfolio[item.position] = item
    })

    return (
      <div className="images-container">
        {sortedPortfolio.map((port, idx) => {
          let description =
            i18n.language === 'en' ? port.description_en : port.description_pt

          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
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

  return (
    <>
      <div className="container portfolio-page">
        <div className="content-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={t('portfolio.title').split('')}
              idx={15}
            />
          </h1>
          <p>{t('portfolio.paragraph')}</p>
          <br />
          <div>{renderPortfolio(portfolio)}</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
