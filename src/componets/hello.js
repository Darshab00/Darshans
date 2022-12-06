import React from 'react'
const name ="Darshan";

const displayMessage=()=>{
    return"I am D!"
}
function Hello(){
    return <h1>hello world!{name} {displayMessage()}</h1>
}

export default Hello;