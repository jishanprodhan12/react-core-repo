import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    const boxStyle = {
        padding: "12px",
        border: "2px solid red",
        width: "200px",
        textAlign: "center",
        margin: "auto auto",

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
            </div>
        </>
    )
}