import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;