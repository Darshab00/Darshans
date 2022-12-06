import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const KFooter = () =>{
    const Year=new Date().getFullYear();

  return (
    <footer>
        <p>copyRight{<CopyrightIcon/>} {Year}</p>

    </footer>
  )
}

export default KFooter