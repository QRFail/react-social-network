import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs_reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return {
        dialogs:state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        updateTextMessage: (m) => {
            dispatch(updateNewMessageTextCreator(m));
        },
        addMessage: () => {
            dispatch(addMessageCreator());
        }

    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;