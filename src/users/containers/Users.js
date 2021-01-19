import { connect } from 'react-redux';
import UsersList from '../components/UsersList';
import { loadUsers } from '../store';
import { useEffect } from 'react';

function Users(props){
    const {isLoading, isError, usersList, error, loadUsers} = props;

    useEffect(() => { 
        if(!usersList || usersList.length === 0) loadUsers();
    }, []);
    
    return (
        <div>
            <h2>Users:</h2>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {error}</p>}
            <UsersList users={usersList} />
        </div>
    
    );
}

export function mapStateToProps(state){ //state - global app state
    return {
        usersList: state.users.list,
        isLoading: state.users.isLoading,
        isError: state.users.isError,
        error: state.users.error
    }
}

export function mapDispatchToProps(dispatch){
    return {
        loadUsers : () => dispatch(loadUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
//TODO: Mock Service Worker: https://mswjs.io/