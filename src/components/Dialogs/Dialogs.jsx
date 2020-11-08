import React from 'react';
import d from './Dialogs.module.scss';
import {NavLink, Redirect} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) =>{
   
    let state = props.messagesPage
    let onSendMessageClick = () =>{
      props.sendMessage()
    }
    let onNewMessageChange = (e) =>{
        let txt = e.target.value
        props.UpdateNewMessageBody(txt)

        
    }
    
    let newMessageBody = state.newMessageBody

    const MessageList = state.MessageData.map(el =>
      <Message key={el.id} message={el.message} yourMessage={el.yourMessage}/>
    )
    const dialogList = state.dialogData.map(el =>
      <DialogItem name={el.name} key={el.userId} userId={el.userId} userImg={el.userImg} />
    )

    if(props.isAuth === false) return <Redirect to={"/login/"} />
    return(
      <div className='dialogs flex__start'>
          <div className={d.dialogs__list}>
            <h4>Your Dialogs</h4>

            <div className="user-list">
              {dialogList}

  
            </div>
          </div>
          <div className={`${d.dialog__window} column`}>
                <div className="messages">
                  {MessageList}
                </div>
                <div className='addPost'>
                    <textarea onChange={onNewMessageChange} value={newMessageBody}  placeholder="Your Message" ></textarea>
                    <button onClick={onSendMessageClick}>Submit</button>
                </div>
          </div>
      </div>  
    )
}

export default Dialogs;