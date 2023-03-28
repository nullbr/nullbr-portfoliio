import GB from 'country-flag-icons/react/3x2/GB'
import BR from 'country-flag-icons/react/3x2/BR'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../context'
import ThemeButton from './ThemeButton'

const ToggleButtons = () => {
  const { i18n } = useAppContext()
  const [language, setLanguage] = useState('en')

  const changeLanguage = (e) => {
    setLanguage(e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  return (
    <>
      <ul className="toggle-buttons">
        <li>
          <ThemeButton />
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
        <ThemeButton />
      </div>
    </>
  )
}

export default ToggleButtons
