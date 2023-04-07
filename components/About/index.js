import './index.scss'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context'
import Title from '../Title'

const About = () => {
  const { t, Loader } = useAppContext()

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <Title title={t('about.title')} idx={15} />

          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
          <p>{t('about.paragraph3')}</p>
          <Link
            to="https://firebasestorage.googleapis.com/v0/b/nullbr-portfolio.appspot.com/o/resume%2FResume_English.pdf?alt=media&token=2a6d4fb2-a421-4896-8abe-71abdd8b1e05"
            className="flat-button"
            target="_blank"
          >
            {t('defaults.resume-button')}
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
                alt="rails"
              />
            </div>
            <div className="face2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="postgres"
              />
            </div>
            <div className="face3">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="react"
              />
            </div>
            <div className="face4">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="html5"
              />
            </div>
            <div className="face5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="postgres"
              />
            </div>
            <div className="face6">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
