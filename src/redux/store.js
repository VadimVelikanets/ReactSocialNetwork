
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
    _state: {
     profilePage: {
        postData: [
        
            
            {
                postId: 1,
                txt: 'And new post',
                data: '29.10.20',
                likeCount: 29
            },
            {
                postId: 1,
                txt: 'Second post',
                data: '26.10.20',
                likeCount: 3
            },
            {
                postId: 1,
                txt: 'First post',
                data: '25.10.20',
                likeCount: 2
            },
        
        ],
        newPostTxt: ''
    },
    messagesPage: {
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
            message: 'Hello!)',
            yourMessage: false
            },
            {
            id: 2,
            message: "What's up?)",
            yourMessage: false
            },
        
            ],
        newMessageBody: ''  

        }
        

    },
    _callSubscriber: () =>{
            console.log('ss')
    },

    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state)

    }



}




 


window.store = store
export default store;