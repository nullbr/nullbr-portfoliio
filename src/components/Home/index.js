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
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['r', 'u', 'n', 'o']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
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
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer </h2>
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
              CONTACT ME
            </Link>
            <Link to="https://firebasestorage.googleapis.com/v0/b/nullbr-portfolio.appspot.com/o/resume%2FResume_English.pdf?alt=media&token=2a6d4fb2-a421-4896-8abe-71abdd8b1e05" 
            className="flat-button"
            target='_blank'>
              VIEW RESUME
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
