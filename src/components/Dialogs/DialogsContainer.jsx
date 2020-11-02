import React from 'react';

import { sendMessageCreater, UpdateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
//import StoreContext from '../../StoreContext';
import {connect} from 'react-redux'
// const DialogsContainer = () =>{

//         return (
//             <StoreContext.Consumer>
//                 {
//                 (store) =>{
//                     let state = store.getState().messagesPage
//                     let onSendMessageClick = () =>{
//                     store.dispatch(sendMessageCreater())
//                     }
//                     let onNewMessageChange = (txt) =>{
//                         store.dispatch(UpdateNewMessageBodyCreater(txt))
                        
//                     }
//                     return <Dialogs UpdateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
//             }}
//         </StoreContext.Consumer>
//         )
// }

let mapStateToProps  = (state) =>{
    return{
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps  = (dispatch) =>{
    return{
        UpdateNewMessageBody: (txt) => {
            dispatch(UpdateNewMessageBodyCreater(txt))
        },
        sendMessage: () => {
            dispatch(sendMessageCreater())
        }
        }
    }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;