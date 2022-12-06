import React,{useState} from 'react'

const UseState_Hook = () => {
  
  const [time=new Date().toLocaleTimeString(), setTime]=useState(10);
  
  const GetTime =()=>{

    setTime(new Date().toLocaleTimeString());
  }
  setInterval(GetTime,1000)
  return (
    
    <>
    <h1 >Time is: {time}</h1>
    <button onClick={GetTime}>Get Time</button>
    </>
  )
}

export default UseState_Hook