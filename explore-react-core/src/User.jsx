export default function User({ user }) {
    const { name, id, phone , email} = user;
    return (
        <>
            <div style={{
                border: "2px solid tomato",
                margin: "5px ",
                padding: "15px"
            }}>
                <p> <span style={{textAlign:"center" , fontWeight:"bold"}}>name</span> : {name}</p>
                <p> <span style={{textAlign:"center" , fontWeight:"bold"}}>id</span> : {id}</p>
                <p> <span style={{textAlign:"center" , fontWeight:"bold"}}>phone</span> : {phone}</p>
                <p> <span style={{textAlign:"center" , fontWeight:"bold"}}>email</span> : {email}</p>
            </div>
        </>
    )
}