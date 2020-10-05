import React, { Component } from 'react'

export class LoginForm extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div className='border rounded shadow p-4'>
                            <h3>Enter Your Name</h3>
                            <input type='text' placeholder='your name' className='form-control mt-3'/>
                            <input type='button' value='submit' className='btn btn-primary mt-4'  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
