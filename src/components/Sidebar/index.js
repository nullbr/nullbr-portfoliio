import './index.scss'
import { useState } from 'react'
import LogoB from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import US from 'country-flag-icons/react/3x2/US'
import BR from 'country-flag-icons/react/3x2/BR'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [showNav, setShowNav] = useState(false);

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }


  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoB} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          data-value={t('sidebar.home')}
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          data-value={t('sidebar.about')}
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
          data-value={t('sidebar.portfolio')}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
          data-value={t('sidebar.contact')}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#0093B9"
          size="3x"
          className='close-icon' />
      </nav>
      <ul className='sidebar-social-icons'>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
      <ul className='language-icons'>
        <li>
          <button onClick={changeLanguage} value='en'>
            <US title="English" className="..."/>
          </button>
        </li>
        <li>
          <button onClick={changeLanguage} value='pt'>
            <BR title="Portuguese" className="..."/>
          </button>
        </li>
      </ul>
      <div className='mobile-language'>
        <button onClick={changeLanguage} value='en'>
          <US title="English" className="..."/>
        </button>
        <button onClick={changeLanguage} value='pt'>
          <BR title="Portuguese" className="..."/>
        </button>
      </div>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#0093B9"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
