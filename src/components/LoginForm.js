import React, { Component } from 'react'

export class LoginForm extends Component {
    onSubmitBtn = () => {
        let name = this.name.value
        let room = this.room.value
        this.props.io.emit('user-login' , {name,room})
        this.props.onClickSubmit(name,room)
    }
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div className='border rounded shadow p-4'>
                            <h3>Login Here</h3>
                            <input type='text' ref={(el) => this.name = el} placeholder='your name' className='form-control mt-3'/>
                            <input type='text' ref={(el) => this.room = el} placeholder='your room name' className='form-control mt-3'/>
                            <input onClick={this.onSubmitBtn} type='button' value='submit' className='btn btn-primary mt-4'  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
