import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'

export class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
          <h1 className='text-center mb-5'>Welcome To Chat App</h1>
          <Chat />
      </div>
    )
  }
}

export default App
