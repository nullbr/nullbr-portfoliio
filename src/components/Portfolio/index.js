import React, { useCallback, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { useAppContext } from '../../context'
import Title from '../Title'
import PortfolioItems from './portfolioItems'

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([])
  const { t } = useAppContext()

  const getPortfolio = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'))
      setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
    } catch (error) {
      console.log(error)
      alert('Sorry! There was a hiccup.')
    }
  }, [])

  useEffect(() => {
    getPortfolio()
  }, [getPortfolio])

  return (
    <>
      <div className="container portfolio-page">
        <div className="content-zone">
          <Title title={t('portfolio.title')} idx={15} cls="page-title" />

          <p>{t('portfolio.paragraph')}</p>
          <br />

          <PortfolioItems portfolio={portfolio} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
