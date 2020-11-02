import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux'
import Axios from 'axios';
import {setUserProfile} from '../../redux/profile-reducer'
import {withRouter} from 'react-router-dom';
class ProfileContainer extends React.Component {
    componentDidMount(){
        const userId = this.props.match.params.userId
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render(){
        return (
            <Profile profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps  = (state) =>{
    return{
        profile: state.profilePage.profile
    }
}
const withUrlData = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
    setUserProfile
})(withUrlData);