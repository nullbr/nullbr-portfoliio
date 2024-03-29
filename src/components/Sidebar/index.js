import './index.scss'
import { useState } from 'react'
import LogoB from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useAppContext } from '../../context'
import ToggleButtons from './ToggleButtons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const [navFadeOut, setNavFadeOut] = useState(false)
  const { t } = useAppContext()

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

      <ToggleButtons />

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
