import React from 'react';

class ProfileStatus extends React.Component {
    state ={
        editMode: false,
        status: this.props.status
    }
    activeEditMode(){
        this.setState({
            editMode: true
        })
    }
    deActiveEditMode(){
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status != this.props.status){
            this.setState({
            status: this.props.status
            })
        }
        
    }

    render(){
            return(
            <div>
                {!this.state.editMode &&
                    <i><span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status || "----"}</span></i>
                }
                {this.state.editMode &&
                    <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActiveEditMode.bind(this)} value={this.state.status}></input> 
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;