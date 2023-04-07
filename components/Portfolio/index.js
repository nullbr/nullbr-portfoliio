import React, { useEffect } from 'react'
import './index.scss'
import { useAppContext } from '../../context'
import Title from '../Title'
import PortfolioItems from './portfolioItems'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolioItems } from '../../features/portfolio/portfolioSlice'

const Portfolio = () => {
  const { t, Loader } = useAppContext()

  const { portfolioItems, isLoading } = useSelector((store) => store.portfolio)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolioItems())
  }, [dispatch])

  return (
    <>
      <div className="container portfolio-page">
        <div className="content-zone">
          <Title title={t('portfolio.title')} idx={15} cls="page-title" />

          <p>{t('portfolio.paragraph')}</p>
          <br />

          {!isLoading && <PortfolioItems portfolio={portfolioItems} />}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
