export default function UsersList(props){
    return props.users.map(
        (user) => <div key={user.login.uuid}> 
                    {user.name.first} {user.name.last} 
                </div>);
}