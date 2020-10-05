import React, { Component } from 'react'

export class Chat extends Component {
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
                            <div className='px-3'>
                                <div>User Online : Andi, Budi, Yogi</div>
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
