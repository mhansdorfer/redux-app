import Button from "react-bootstrap/Button"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Users';

function Home(props){
    return <>
        <Button style={{margin: "10px"}} onClick={() => props.loadUsers()}>
            Load
        </Button>
        <Button style={{margin: "10px"}} onClick={() => props.resetUsers()}>
            Reset
        </Button>
        <Button style={{margin: "10px"}} onClick={() => props.addUser()}>
            Add
        </Button>
    </>;
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Home);
//TODO: Mock Service Worker: https://mswjs.io/

//Load - load 10 users again to global state
//Reset - reset users list
//Add - download users' list again, but show the old list + one user



