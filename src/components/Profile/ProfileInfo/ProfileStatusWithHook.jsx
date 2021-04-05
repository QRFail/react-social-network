import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState('');

    useEffect(() => {

        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    }


    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || '---'}</span>
            </div>
            }

            {editMode &&
            <div><input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode}
                        value={status}></input></div>
            }

        </div>
    )
}

export default ProfileStatusWithHook;
