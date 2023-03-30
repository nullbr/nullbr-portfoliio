import { signInWithGoogle } from '../../firebase'

const Login = () => {
  return (
    <div className="login-container">
      <button className="flat-button" onClick={signInWithGoogle}>
        Sign in with google
      </button>
    </div>
  )
}

export default Login
