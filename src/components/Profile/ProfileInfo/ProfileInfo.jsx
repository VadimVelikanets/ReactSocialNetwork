import React from 'react';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
const ProfileInfo = (props) =>{
    if(!props.profile){
      return (<div className='profile__inner'>
              <img width='120px' className='profile-img' src='/img/profile.png'/>
              <h2>John Smith</h2>
              <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
              <p><b>Age: </b> 25</p> 
              <p><b>City: </b> London</p> 
              <p><b>Education: </b> Harvard</p> 
              
            </div>  )
    }
    return(
          <div className='profile__inner'>
            
            {props.profile.photos.large 
            ? <img width='120px' className='profile-img' src={props.profile.photos.large}/>
             : <img width='120px' className='profile-img' src='/img/no-photo.png'/>}
            
            <h2>{props.profile.fullName}</h2>
            <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
            <p><b>About Me: </b> <i>{props.profile.aboutMe}</i></p> 
            <p><b>Age: </b> 25</p> 
            <p><b>City: </b> London</p> 
            <p><b>Education: </b> Harvard</p> 
          </div>  

    )
}

export default ProfileInfo;