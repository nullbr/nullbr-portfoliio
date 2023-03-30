import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App
