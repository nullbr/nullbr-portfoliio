import { createContext, useContext } from 'react'
import { useTranslation } from 'react-i18next'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const GlobalContext = ({ children }) => {
  const { t } = useTranslation()
  const { i18n } = useTranslation()

  return (
    <AppContext.Provider value={{ t, i18n }}>{children}</AppContext.Provider>
  )
}

export default GlobalContext
