import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {addMessageCreator} from "../../redux/dialogs_reduser";
import {Textarea} from "../../assets/FieldsComponents/FiledsComponents";
import {maxLengthCreator, required} from "../../utils/validaters/redux_form_validator";

const maxLength20 = maxLengthCreator(20);

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
    const sendMessage = (formData) =>{
        props.addMessage(formData.message);
    }

    let dialogsElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddNewMessageDialogReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

const AddNewMessageDialogForm = (props) => {
    return(
        <form className={s.messages} onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name='message' validate={[required, maxLength20]}/></div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddNewMessageDialogReduxForm = reduxForm({form:'newMessageDialogForm'})(AddNewMessageDialogForm);

export default Dialogs;