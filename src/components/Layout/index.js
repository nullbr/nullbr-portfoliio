import { createContext, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const Layout = () => {
  const { t } = useTranslation()
  const { i18n } = useTranslation()

  return (
    <AppContext.Provider value={{ t, i18n }}>
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>

          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default Layout
