import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../context'

const ThemeButton = () => {
  const { defaultTheme } = useAppContext()
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    if (root.className !== theme) {
      root.className = theme
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="theme-button"
      >
        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
      </button>
    </>
  )
}

export default ThemeButton
