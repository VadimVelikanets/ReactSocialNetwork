import React from 'react';
import { sendMessageCreater, UpdateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

import {connect} from 'react-redux'

let mapStateToProps  = (state) =>{
    return{
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
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