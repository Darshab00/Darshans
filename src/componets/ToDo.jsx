import React from 'react'
import { useState } from 'react'
import ToDo2 from './ToDo2';

const ToDo = () => {

    const [inputList,setInput]=useState("");
    const [Items,setItems]=useState([]);

    const ItemChange=(event)=>{
        // console.log(inputList)
        setInput(event.target.value)
    }

    const listOf=()=>{
        setItems((Items)=>{
            return[ ...Items ,inputList];
        })
    }

        const Remove=(id)=>{
            console.log('deleted')
            setItems((oldItem)=>{
                return oldItem.filter((arrELe,index)=>{
                    return index!==id;
                })
            })
        }

  return (
    <>
    <h1 className='header'>ToDo</h1>
    <div className='Con'>
        <div className='Con2'>
        <h2>ToDo List</h2>
        <input type='text' placeholder='Add item' onChange={ItemChange} />
        <button onClick={listOf}> ➕</button>
        <ol>
           { Items.map((itemval,index)=>{
                return <ToDo2 
                text={itemval}
                key={index}
                id={index}
                onSelect={Remove}
                />
            })
        }
        </ol>

        </div>
    </div>
    </>
  )
    }

export default ToDo