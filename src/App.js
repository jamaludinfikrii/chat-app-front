import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'

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
            <LoginForm  onClickSubmit={this.changeStateName} />
        </div>
      )
    }

    return(
      <div className='container mt-5'>
          <Chat userLogin={this.state.name}/>
      </div>

    )
  }
}

export default App
