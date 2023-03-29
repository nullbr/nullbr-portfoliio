import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../Title/AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { useAppContext } from '../../context'

const Home = () => {
  const { t } = useAppContext()

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={t('home.hi').split('')}
              idx={11}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={t('home.im').split('')}
              idx={13}
            />
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'runo,'.split('')}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Full Stack '.split('')}
              idx={22}
            />
            <br className="mobile-break" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Developer'.split('')}
              idx={22}
            />
          </h1>
          <h2>{t('home.find_me')} </h2>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/bruno-mariano-leite/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
            </a>
            <a
              href="https://github.com/nullbr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
            </a>
          </div>
          <div className="buttons">
            <div className="contact-btn">
              <Link to="/contact" className="flat-button">
                {t('home.contact_me')}
              </Link>
            </div>
            <div className="resume-btn">
              <Link
                to={t('home.resume_url')}
                className="flat-button"
                target="_blank"
              >
                {t('defaults.resume-button')}
              </Link>
            </div>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
