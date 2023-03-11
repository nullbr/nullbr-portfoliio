import LogoHome from '../../../assets/images/logo-home.png'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoHome}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
