import Alert from 'react-bootstrap/Alert';
import {connect} from 'react-redux';

export const MessageType = {
    Warning: "warning",
    Info: "info",
    Danger: "danger"
}

function Message(props){
    const {type, message} = props;
    return(
        type && message &&
        <Alert variant={props.type} style={{border: `1px solid ${props.type==="warning"? "orange" : (props.type==="info" ? "blue" : "red")}`}}>
            {props.message}
        </Alert>
    )
}

const mapStateToProps = (state) => ({
    type: state.ui.messages.length > 0 && state.ui.messages[state.ui.messages.length-1].type,
    message: state.ui.messages.length > 0 && state.ui.messages[state.ui.messages.length-1].message
})

export default connect(mapStateToProps)(Message);
