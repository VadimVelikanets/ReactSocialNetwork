import React from 'react';
import Header from './Header';
import Axios from 'axios';
import {setUserAuthData} from '../../redux/auth-reduces';
import {connect} from 'react-redux'
class HeaderContainer extends React.Component{
    componentDidMount(){
         
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
                if(response.data.resultCode === 0){
                    const {id, email, login} = response.data.data
                    let isAuth = true;
                    this.props.setUserAuthData(id, email, login, isAuth)
                }
            })
              
    }
    render(){
          return  <Header {...this.props}/> 
    }

}

const mapStateToProps  = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);