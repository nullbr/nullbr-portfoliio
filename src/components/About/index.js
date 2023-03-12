import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" />
            </div>
            <div className="face2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt='postgres' />
            </div>
            <div className="face3">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt='react' />
            </div>
            <div className="face4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html5' />
            </div>
            <div className="face5">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  alt='postgres' />
            </div>
            <div className="face6">
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt='git' />
            </div>
          </div>
        </div>
        
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={t('about.title').split(',')}
              idx={15}
            />
          </h1>
          <p>
            I am a hard-working and capable developer that 
            has always been passionate about technology 
            and taking on challenging and diverse projects. 
          </p>
          <p align="LEFT">
            As a Full Stack Developer, I had the opportunity to plan, 
            desig and implement features web applications and APIs. 
            My main tech stack is: Ruby on Rails, HTML, SCSS, jQuery, ReactJS, PostgreSQL, among others. 
            Also, I have integrated these systems with third party APIs such as 
            Twilio, Stripe, Sidekiq, Sentry and Sendinblue. 
            In all of my projects I seek to apply valuable leadership skills 
            while making productivity and delivery time top priorities. 
            Furthermore, as a Computer Science student, I strive to develop my theoretical and practical 
            skills to stay relevant in this fast growing sector.
          </p>
          <p>
            When I am not focused on tech, I enjoy my time learning to play the guitar, 
            practice Brazilian Jiu-Jitsu and work on my motorcycle.
          </p>
          <Link to="https://firebasestorage.googleapis.com/v0/b/nullbr-portfolio.appspot.com/o/resume%2FResume_English.pdf?alt=media&token=2a6d4fb2-a421-4896-8abe-71abdd8b1e05" 
          className="flat-button"
          target='_blank'>
            VIEW RESUME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
