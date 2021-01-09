import { connect } from 'react-redux';
import UsersList from '../components/UsersList';
import {loadUsers, resetUsers, addUser} from '../store';

function Users(props){
    const {isLoading, isError, usersList, error} = props;

    return (
        <div>
            <h2>Users:</h2>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {error}</p>}
            <UsersList users={usersList} />
        </div>
    
    );
}

export function mapStateToProps(state){ //global app state
    return {
        usersList: state.users.list,
        isLoading: state.users.isLoading,
        isError: state.users.isError,
        error: state.users.error
    }
}

export const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(loadUsers()),
    resetUsers: () => dispatch(resetUsers()),
    addUser: () => dispatch(addUser())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Users);
//TODO: Mock Service Worker: https://mswjs.io/