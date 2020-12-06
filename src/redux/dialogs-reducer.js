const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    dialogData: [
        {
        userId: 2,
        name: 'Julia',
        userImg: 'user1.png'
        },
        {
        userId: 3,
        name: 'Henry',
        userImg: 'user2.jpg'
        },
        {
        userId: 4,
        name: 'Alan',
        userImg: 'user3.jpg'
        },
        {
        userId: 5,
        name: 'Kate',
        userImg: 'user4.png'
        },
    ],
    MessageData: [
        {
        id: 1,
        message: 'Hello, buddy!)',
        yourMessage: true
        },
        {
        id: 2,
        message: "Hello:) What's up?)",
        yourMessage: false
        },
    
        ]
}
const dialogsReducer = (state = initialState, action) => {
    let stateCopy
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
             //Копируем state т.к не имеем права менять его не прямую 
            stateCopy = {...state,
                newMessageBody: action.body
            }
           
            return stateCopy
        }
            
        case SEND_MESSAGE:{
            //Копируем state т.к не имеем права менять его не прямую 
            stateCopy = {...state,
                 MessageData: [...state.MessageData]
                }
            
            let body = action.newMessageBody;
            let messagePost = {
                id: stateCopy.MessageData.length + 1,
                message: body,
                yourMessage: true
            };
            if(body != ''){
                stateCopy.MessageData.push(messagePost)
            }
            stateCopy.newMessageBody  = '';
            return stateCopy
        }
        

        default:
            return state 
      }
}

export const sendMessageCreater = (newMessageBody) =>{
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export const UpdateNewMessageBodyCreater = (text) =>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default dialogsReducer;