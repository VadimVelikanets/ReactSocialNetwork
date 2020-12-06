import React from 'react';
import d from './Dialogs.module.scss';
import {NavLink, Redirect} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import {requiredField, maxLenghtCreator} from "../../utils/validation/index"
import {Textarea} from '../../components/common/FormsControl/FormsControl'

const Dialogs = (props) =>{
   
    let state = props.messagesPage

    let addNewMessage = (value) =>{
     
      props.sendMessage(value.newMessageBody) 
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
               <AddMessageFormRedux onSubmit={addNewMessage}/>
          </div>
      </div>  
    )
}
let maxLength100 = maxLenghtCreator(100)
const AddMessageForm = (props) =>{
  return(
    <form className='addPost' onSubmit={props.handleSubmit}>
                    <Field component={Textarea}  validate={[requiredField, maxLength100]} name={"newMessageBody"}   placeholder="Your Message" ></Field>
                    <button>Submit</button>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm)
export default Dialogs;