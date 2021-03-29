import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs_reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);