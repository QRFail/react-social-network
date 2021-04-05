import React from 'react';

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: ''
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div><input onChange={this.onChangeStatus} autoFocus={true}  onBlur={this.deactivateEditMode} value={this.state.status}></input></div>
                }

            </div>
        )
    }
}

export default ProfileStatus;
