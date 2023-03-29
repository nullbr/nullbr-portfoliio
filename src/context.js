import { createContext, useContext, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Loader from 'react-loaders'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const GlobalContext = ({ children }) => {
  // Set language constants
  const { t } = useTranslation()
  const { i18n } = useTranslation()

  // Find theme on page reload and set the root class to theme
  const defaultTheme = useMemo(() => {
    const storage = localStorage.getItem('theme')

    if (storage === 'light' || storage === 'dark') {
      return localStorage.getItem('theme')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', defaultTheme)

    const root = document.documentElement
    root.className = defaultTheme
  }, [defaultTheme])

  return (
    <AppContext.Provider value={{ t, i18n, defaultTheme, Loader }}>
      {children}
    </AppContext.Provider>
  )
}

export default GlobalContext
