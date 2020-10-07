import React, { Component } from 'react'

export class Chat extends Component {
    state = {
        chats : [],
        userOnline : []
    }
    componentDidMount(){
        this.props.io.on('send-message' , (data) => {
            console.log(data)
            this.setState({chats : [...this.state.chats , ...data]})
        })

        this.props.io.on('user-online' , (data) => {
            this.setState({userOnline : data})
        })
    }

    onSendButtonClick = () => {
        var data = {
            message : this.msg.value,
            username : this.props.userLogin
        }

        this.props.io.emit('send-message' , data)
    }

    renderMessage = () => {
        return this.state.chats.map((val) => {
            return(
                <div>
                    <span className='font-weight-bold text-danger'>{val.username}</span>
                    <span>{val.message}</span>
                </div>
            )
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
                                User Online : {this.state.userOnline.map((val) => val.username + ' , ')}
                            </div>
                            <div className='px-3'>
                               
                               {this.renderMessage()}
                              
                            </div>
                            <div style={{position : "fixed",left :"0px" , bottom : "0px" , right : "0px"}} className='p-4 bg-secondary d-flex justfy-content-between'>
                                <input ref={(el) => this.msg = el} type='text' className='form-control w-75'  />
                                <input type='button' onClick={this.onSendButtonClick} className='btn btn-info' value='send'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat
