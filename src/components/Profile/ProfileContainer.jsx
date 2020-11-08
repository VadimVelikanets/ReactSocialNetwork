import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux'
import {setUserProfile, profileThunk} from '../../redux/profile-reducer'
import {Redirect, withRouter} from 'react-router-dom';
class ProfileContainer extends React.Component {
    componentDidMount(){
         const userId = this.props.match.params.userId
         this.props.profileThunk(userId)
        
    }
    render(){
        
       if(this.props.isAuth === false)  return <Redirect to={"/login/"} />
        
        return (
            <Profile profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps  = (state) =>{
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const withUrlData = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
    setUserProfile, profileThunk
})(withUrlData);