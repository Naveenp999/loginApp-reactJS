import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}
  check = () => {
    this.setState(prev => ({
      isLogin: !prev.isLogin,
    }))
  }
  render() {
    const {isLogin} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          {!isLogin && <Message note="Please Login" />}
          {isLogin && <Message note="Welcome User" />}
          {!isLogin && <Login log={this.check} />}
          {isLogin && <Logout log={this.check} />}
        </div>
      </div>
    )
  }
}

export default Home
