import React from 'react';
import d from './../Dialogs.module.scss';



const Message = (props) =>{
  let classNameMessage = ''
  if(props.yourMessage === true){
    classNameMessage = d.yourMessage
  } else{
    classNameMessage = d.otherMessage
  }
  return (

  <div className={`${d.message__item}  ${classNameMessage}`}>{props.message}</div>
  )
}

export default Message;