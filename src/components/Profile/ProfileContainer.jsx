import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux'
import {setUserProfile, profileThunk, getStatus, updateStatus} from '../../redux/profile-reducer'
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
    componentDidMount(){
         let userId = this.props.match.params.userId
         if(!userId){
             //userId = 12364;
             userId = this.props.authorizedUserId
             if(!userId){
                 this.props.history.push("/login")
             }
         }

         this.props.profileThunk(userId)
         this.props.getStatus(userId)
        
    }
    render(){

        return (
            <Profile updateStatus={this.props.updateStatus} status={this.props.status} profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps  = (state) =>{
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


//HOC for Auth
export default compose(
    connect(mapStateToProps, {
        setUserProfile, profileThunk, getStatus, updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)