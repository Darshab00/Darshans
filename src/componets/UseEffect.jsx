import { Button } from '@mui/material'
import React,{useState} from 'react'
import '../index.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import 'bootstrap/dist/css/bootstrap.min.css';

const UseEffect = () => {
  const [Num, setNum] = useState(0)
  return (
    <>
    <title >Hii!{Num}</title><div className='Buttons'>
    <Button onClick={()=>{setNum(Num+1)}} >Click me  {Num}<AddBoxIcon/></Button>
    </div></>
  )
}

export default UseEffect