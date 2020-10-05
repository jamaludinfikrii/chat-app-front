import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'
import socket from 'socket.io-client'

const io = socket('http://localhost:5000')

export class App extends Component {
  state = {
    name : null
  }

  changeStateName = (name) => {
    this.setState({name : name})
  }

  render() {
    if(this.state.name === null){
      return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Welcome To Chat App</h1>
            <LoginForm io={io}  onClickSubmit={this.changeStateName} />
        </div>
      )
    }

    return(
      <div className='container mt-5'>
          <Chat io={io} userLogin={this.state.name}/>
      </div>

    )
  }
}

export default App
