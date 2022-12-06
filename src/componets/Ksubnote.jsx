import { Button } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Ksubnote = (props) => {
  return (
    <>
    <div>
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <Button><DeleteIcon/></Button>
    </div>
    </>
  )
}

export default Ksubnote