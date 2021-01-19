import Button from "react-bootstrap/Button"
import { connect } from 'react-redux';
import { MessageType } from '../../ui/Message';
import {addMessage} from '../../ui/store';
import {loadUsers, resetUsers, addUser} from '../../users/store';

function Home(props){
    return <>
        <Button style={{margin: "10px"}} onClick={() => {
            props.loadUsers();
            props.addMessage(MessageType.Info, 'Users will be loaded.');
        }}>
            Load
        </Button>
        <Button style={{margin: "10px"}} onClick={() => {
            props.resetUsers();
            props.addMessage(MessageType.Danger, 'Users will be removed.');
        }}>
            Reset
        </Button>
        <Button style={{margin: "10px"}} onClick={() => {
            props.addUser();
            props.addMessage(MessageType.Warning, 'One user will be added.');
        }}>
            Add
        </Button>
    </>;
}

export const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(loadUsers()),
    resetUsers: () => dispatch(resetUsers()),
    addUser: () => dispatch(addUser()),
    addMessage: (type, msg) => dispatch(addMessage(type, msg))
});

export default connect(
    null, 
    mapDispatchToProps
)(Home);
//TODO: Mock Service Worker: https://mswjs.io/

//Load - load 10 users again to global state
//Reset - reset users list
//Add - download users' list again, but show the old list + one user



