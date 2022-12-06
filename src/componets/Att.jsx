import React,{useState} from 'react'

const Att = () => {
    const[I,setI]=useState(0)
    const[O,setO]=useState(0)
    const [IN, setIN] = useState([''])
    const [out, setOut] = useState([' '])
    // const [Inde,setInde]=useState(1)
    const [In,setIn]=useState()
    const [Out,setout]=useState()

    const Entry=()=>{
        if(I===O){
        setIN([...IN,new Date().toLocaleTimeString()])
        setI(I+1)
    }
else{alert('U Cant not enter Twice')}
}
    const Exit=()=>{
        setOut([...out, new Date().toLocaleTimeString() ])
        setO(O+1)
    }
        const Report=()=>{
            setIn(IN[1])
            setout(out[1])
        }
        return (
            
            <>
    <div>
        <h1> ENTRY:<button onClick={Entry}>CHECK IN</button></h1>
        <h1> EXIT:<button onClick={Exit}>CHECK OUT</button></h1>
        <h2>In AT:{IN}</h2>
        <h2>Out AT:{out}</h2>
        <h1><button onClick={Report}>Report</button></h1>
        <h1>In Data{In}</h1>
    </div>
    </>
  )
}

export default Att;