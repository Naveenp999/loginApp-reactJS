import './index.css'

const Logout = props => {
  const {log} = props
  return (
    <button className="button" type="button" onClick={log}>
      Logout
    </button>
  )
}

export default Logout
