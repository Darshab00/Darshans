import React from 'react'
import 'C:/Users/Lenovo/OneDrive/Documents/reactp/my/src/index.css'

const today =new Date().toJSON().slice(0,10).replace(/-/g,'/');
const time=new Date().toLocaleTimeString();
const name=Math.random();

const Current = () => {
  return (
    <>
    <div className='dayy'>
    <h1 className='day'>Hello,My Name Is Darshan Prakash </h1>
    <div className='border'><img src='https://picsum.photos/400/300' className='img' alt={(name)}/>
    <img src='https://picsum.photos/400/100' className='img' alt={(name)} />
    <img src='https://picsum.photos/400/300' className='img' alt={(name)}/></div>

        <div className='day1'><ul>today Date is--{(today)}</ul></div>
        <div className='day1'><ul>And time is----{(time)}</ul></div>
        </div>
    </>
  )
}

export default Current