import './index.css'

const Message = props => {
  const {note} = props
  return <h1 className="heading">{note}</h1>
}

export default Message
