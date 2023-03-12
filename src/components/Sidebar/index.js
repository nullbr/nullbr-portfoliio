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
  const [showNav, setShowNav] = useState(false);

  function changeLanguage(e) {
    t.changeLanguage(e.target.value);
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
          data-value={t('home')}
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          data-value={t('about')}
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
          data-value={t('portfolio')}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
          data-value={t('contact')}
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
      <ul className='social-icons'>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
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
            href="https://github.com/bobangajicsm"
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
