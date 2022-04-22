import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusWithHooksType = {
    status: string
    updateStatus: any
}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {



    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus onChange={onStatusChange}
                           onBlur={deactivateMode}
                           value={status}/>
                </div>
            }
        </div>
    );
};
//{/*<input autoFocus onChange={(e: ChangeEvent<HTMLInputElement>)=>{onStatusChange(e)}}*/}
