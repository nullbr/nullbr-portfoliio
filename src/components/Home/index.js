import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import './index.scss'

const Home = () => {
  const { t } = useTranslation();

  const [letterClass, setLetterClass] = useState('text-animate')

  const hiArray = t('home.hi').split('')
  const imArray = t('home.im').split('')
  const nameArray = ['r', 'u', 'n', 'o', ',']
  const stackArray = 'Full Stack '.split('')
  const devArray = 'Developer'.split('')

  useEffect(() => {
    let timer = setTimeout(() => { setLetterClass('text-animate-hover') }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              idx={11}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={imArray}
              idx={13}
            />
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={stackArray}
              idx={22}
            />
            <br className='mobile-break' />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={devArray}
              idx={27}
            />
          </h1>
          <h2>{t('home.find_me')} </h2>
          <div className='social-media'>
            <a
              href="https://www.linkedin.com/in/bruno-mariano-leite/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
              />
            </a>
            <a
              href="https://github.com/nullbr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
              />
            </a>
          </div>
          <div className='buttons'>
            <Link to="/contact" className="flat-button">
              {t('home.contact_me')}
            </Link>
            <Link to={t('home.resume_url')}
            className="flat-button"
            target='_blank'>
              {t("defaults.resume-button")}
            </Link>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
