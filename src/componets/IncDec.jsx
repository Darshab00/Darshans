import React from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Clock from 'react-digital-clock';

const IncDec = () => {
    const [Num,setNum]=useState(0);
    // let count=''
    const Incre=()=>{
        setNum(Num+1)
    }
    const Decre=()=>{
        if(Num!==0){
        setNum(Num-1)}
        else{
        // setNum(Num+100) 
        alert('Can not go beyond 0')
        }
    }
  return (
    <>
    <div className='time'><Clock /></div>
    <div className='coo'><h6 className='h6'>Darshan Prakash</h6><h1 className='h'>{Num}</h1><div className='bu'>
    <Button className='b1' onClick={Incre}><AddIcon/></Button><Button className='b2' onClick={Decre}><DeleteIcon/></Button></div>
    </div>
    </>
  )
}

export default IncDec