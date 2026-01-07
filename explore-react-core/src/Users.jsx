import { useState } from "react";

export default function Users() {
    const [count, setCount] = useState(0);

    const boxStyle = {
        padding: "12px",
        border: "2px solid red",
        width: "200px",
        textAlign: "center",
        margin: "auto auto",

    };

    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleReduce = () => {
        setCount(count - 1);
    }

    return (
        <div style={boxStyle}>
            <h2>Count : {count}</h2>
            <div style={{
                margin : 'auto auto',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
            }
            }>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReduce}>reduce</button>
            </div>
        </div >
    );
}
