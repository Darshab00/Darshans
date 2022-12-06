import React,{useState} from 'react'
import Result from './Result'

const Searchfilter = () => {
    const [Search, setSearch] = useState('Ocean');
    const inputEv=(event)=>{
        setSearch(event.target.value)
    }
    return (
        <>
    <div><h1>hi {Search}</h1>
    <input type='text' placeholder='Search' onChange={inputEv}/>
    <button onClick=''>search</button>
    </div>
    <Result Search={Search}/>
    </>
  )
}

export default Searchfilter