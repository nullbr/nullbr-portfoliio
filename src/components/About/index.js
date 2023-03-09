import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
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
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
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
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
