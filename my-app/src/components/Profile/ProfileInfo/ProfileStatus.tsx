import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate()
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
        debugger
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus
