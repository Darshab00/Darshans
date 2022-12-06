import React from 'react'
import { useState } from 'react'




const Login = () => {
        const [name,setName]=useState('f');
        const [Fname,setFname]=useState();

        const inputEvent =(event)=>{
            setName(event.target.value);
        }
        const Input=()=>{
            setFname(name);
        }
  return (
    <>
    <h1> Hello {Fname}</h1>
    <input type='text' placeholder='Enter Your Name' onChange={inputEvent} value={name}/>
    <button onClick={Input}>Click Me! 👍</button>
    </>
  )
}

export default Login