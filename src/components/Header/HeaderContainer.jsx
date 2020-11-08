import React from 'react';
import Header from './Header';
import {setUserAuthData, authThunk} from '../../redux/auth-reducer';
import {connect} from 'react-redux'
class HeaderContainer extends React.Component{
    componentDidMount(){

        this.props.authThunk()
              
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
export default connect(mapStateToProps, {setUserAuthData, authThunk})(HeaderContainer);