import './index.scss'
import { useState, useEffect } from 'react'
import LogoB from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GB from 'country-flag-icons/react/3x2/GB'
import BR from 'country-flag-icons/react/3x2/BR'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faSuitcase,
  faCircleHalfStroke,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const [showNav, setShowNav] = useState(false)
  const [navFadeOut, setNavFadeOut] = useState(false)
  const [darkTheme, setTheme] = useState(localStorage.getItem('darkTheme'))

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value)
  }

  function changeTheme() {
    setTheme(!darkTheme)
  }

  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme)

    function setThemeColors() {
      const darkMode = {
        '--main-color': '#0093b9',
        '--secondary-color': '#e9f1fa',
        '--tertiary-color': '#fff',
        '--quaternary-color': '#000',
        '--sidebar-links': '#fff',
        '--is-dark-theme': 1,
      }
      const lightMode = {
        '--main-color': '#0093b9',
        '--secondary-color': '#1d1d1d',
        '--tertiary-color': '#4d4d4e',
        '--quaternary-color': '#e9f1fa',
        '--sidebar-links': '#fff',
        '--is-dark-theme': 0,
      }
      const currentTheme = darkTheme ? darkMode : lightMode

      for (var prop in currentTheme) {
        document.documentElement.style.setProperty(prop, currentTheme[prop])
      }
    }
    setThemeColors()
  }, [darkTheme])

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => {
          setNavFadeOut(true)
          setShowNav(false)
        }}
      >
        <img src={LogoB} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav
        className={(() => {
          if (showNav) {
            return 'mobile-show animated animatedFadeInUp fadeInUp'
          } else if (navFadeOut) {
            return 'mobile-show animated fadeOutDown'
          } else {
            return ''
          }
        })()}
      >
        <div
          id="nav-blank"
          onClick={() => {
            setNavFadeOut(true)
            setShowNav(false)
          }}
        ></div>
        <NavLink
          id="home"
          exact="true"
          activeclassname="active"
          to="/"
          data-value={t('sidebar.home')}
          onClick={() => {
            setNavFadeOut(true)
            setShowNav(false)
          }}
        >
          <FontAwesomeIcon icon={faHome} className="anchor-icon" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          data-value={t('sidebar.about')}
          onClick={() => {
            setNavFadeOut(true)
            setShowNav(false)
          }}
        >
          <FontAwesomeIcon icon={faUser} className="anchor-icon" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => {
            setNavFadeOut(true)
            setShowNav(false)
          }}
          data-value={t('sidebar.portfolio')}
        >
          <FontAwesomeIcon icon={faSuitcase} className="anchor-icon" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => {
            setNavFadeOut(true)
            setShowNav(false)
          }}
          data-value={t('sidebar.contact')}
        >
          <FontAwesomeIcon icon={faEnvelope} className="anchor-icon" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => {
            setNavFadeOut(true)
            setShowNav(false)
          }}
          icon={faClose}
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul className="sidebar-social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/bruno-mariano-leite/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/nullbr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
          </a>
        </li>
      </ul>
      <ul className="toggle-buttons">
        <li>
          <button onClick={changeTheme} className="theme-button">
            <FontAwesomeIcon icon={faCircleHalfStroke} />
          </button>
        </li>
        <li>
          <button onClick={changeLanguage} value="en">
            <GB title="English" className="..." />
          </button>
        </li>
        <li>
          <button onClick={changeLanguage} value="pt">
            <BR title="Portuguese" className="..." />
          </button>
        </li>
      </ul>
      <div className="toggle-buttons-mobile">
        <button onClick={changeLanguage} value="en">
          <GB title="English" className="..." />
        </button>
        <button onClick={changeLanguage} value="pt">
          <BR title="Portuguese" className="..." />
        </button>
        <button onClick={changeTheme} className="theme-button">
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </button>
      </div>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="var(--main-color)"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
