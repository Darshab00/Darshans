import { useState } from "react";

function FunctionCounter(){
    const [counter,setcounter]=useState(0);

    const increment=()=>{
        setcounter(counter+1);
    }
    const Decrement=()=>{
        setcounter(counter-1);
    }

    return <div>
        <div><h1>Counter value :{counter}</h1></div>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
        <div>
            <button onClick={Decrement}>Decrement</button>
        </div>
    </div>
}

export default FunctionCounter