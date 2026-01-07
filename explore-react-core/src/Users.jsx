import { useEffect, useState } from "react";
import User from "./User";
export default function Users() {
    const [users, setUsers] = useState([]);
    const boxStyle = {
        padding: "12px",
        border: "2px solid red",
        width: "200px",
        textAlign: "center",
        margin: "auto auto",
        minWidth: "350px"
    };
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data))
    },[]);
    return (
        <>
            <div style={boxStyle}>
                <h2>Users : {users.length}</h2>
                {
                    users.map(user=> <User user={user}></User>)
                }
            </div>
            
        </>
    )
}