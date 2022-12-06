import React from 'react'

const ToDo2 = (props) => {
  return (
<>
<ul><button onClick={()=>{
    props.onSelect(props.id)
}}>➖</button>{props.text}</ul>
</>
  )
}

export default ToDo2