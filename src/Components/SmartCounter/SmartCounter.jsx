import {useState} from "react";

function SmartCounter(){
    const [qtde, upQtde] = useState(1)

    return (
        <>
            <h1>{qtde}</h1>
            <button onClick={()=> upQtde(qtde + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;