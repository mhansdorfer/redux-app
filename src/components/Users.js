import { useEffect, useState } from "react";
import axios from "axios";

export default function Users(props){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://randomuser.me/api?results=10")
        .then((response) => {
            setUsers(response.data.results);
        });
    }, []); //[] - to make sure that the code will run once;

    return (
        users.map((user) => <div key={user.login.uuid}> {user.name.first} {user.name.last} </div>)
    );
}


//TODO: Mock Service Worker: https://mswjs.io/