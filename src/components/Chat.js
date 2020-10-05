import React, { Component } from 'react'

export class Chat extends Component {
    componentDidMount(){
        this.props.io.on('user-login',(message) => {
            console.log(message)
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='alert alert-info col-md-6' >
                        hello , {this.props.userLogin ? this.props.userLogin : null}
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='border rounded shadow' style={{height : "600px", overflow:"auto",position: "relative"}} >
                            <div className='bg-secondary text-white p-3' style={{position : "sticky",top:"0px",right : "0px",left : "0px"}}>
                                User Online : Andi, Budi, Yogi
                            </div>
                            <div className='px-3'>
                               
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                                <div>Isi Chat</div>
                            </div>
                            <div style={{position : "sticky",left :"0px" , bottom : "0px" , right : "0px"}} className='p-4 bg-secondary d-flex justfy-content-between'>
                                <input type='text' className='form-control w-75'  />
                                <input type='button' className='btn btn-info' value='send'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat
