import './index.css'

const Login = props => {
  const {log} = props
  return (
    <button className="button" type="button" onClick={log}>
      Login
    </button>
  )
}

export default Login
