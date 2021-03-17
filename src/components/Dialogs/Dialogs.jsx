import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs_reduser";

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
    const sendMessage = () =>{
        props.dispatch(addMessageCreator())
    }
    const updateTextMessage = (e) =>{
        let m = e.target.value;
        props.dispatch(updateNewMessageTextCreator(m))
    }

    let dialogsElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div><textarea onChange={updateTextMessage} value={props.state.newMessageText}></textarea></div>
                <div><button onClick={ sendMessage }>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;