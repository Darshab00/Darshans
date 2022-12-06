import React from 'react'
import Ddata from'./Ddata'

const DD = () => {
    function DDa(props){
        return(
            <>
            <h1>Name:{props.name}</h1>
            <h1>Age:{props.age}</h1>
            </>
        )
    }
    function nDDa(val){
        return(<DDa
        name={val.name}
        age={val.age}/>
    )}
  return (
    <>
    <h1>yo Whats up!!</h1>
    <div>{Ddata.map(nDDa)}</div>
    </>
  )
}

export default DD