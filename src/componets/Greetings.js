import React from 'react'
import 'C:/Users/Lenovo/OneDrive/Documents/reactp/my/src/index.css'

let curDate =new Date();
let time=new Date().toLocaleTimeString();
curDate = curDate.getHours();
let GG='';
const cssStyle={};

if(curDate >=1 && curDate < 12){
    GG='Good morning';
    cssStyle.color='green'
}else if(curDate >=12 && curDate < 18){
    GG='Good afternoon';
    cssStyle.color='white'
}else if(curDate >=18 && curDate < 24){
    GG='Good Night';
    cssStyle.color='orange'
}

const Greetings = () => {
  return (
    <>
        <div className='Gree'><h1>Hello Sir,<span style={cssStyle}>{(GG)}</span>
          <div>Time is : {(time)}</div>
        </h1></div>
    </>
  )
}

export default Greetings