import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Knote = (props) => {

    const [note, setNote] = useState({
        title:'',
        content:'',
    })

    const InputEvent =(event)=>{
        // const value=event.target.value;
        // const name=event.target.name;
        const{name,value}=event.target

        setNote((oldDate)=>{
            return{
                ...oldDate,
                [name]:value,
            }
        })
        // console.log(note)
    }
    const AddNote=(note)=>{
        props.passNote(note)
        console.log(note)
    }
  return (
    <><div>
        <form>
            <input type='text' value={note.title} name='title' onChange={InputEvent} placeholder='Title'/>
            <textarea rows='' column='' name='content' onChange={InputEvent} value={note.content} placeholder='Write a note'/>
            <Button onClick={AddNote}><AddIcon/></Button>
            </form>
    </div>
    
    </>
  )
}

export default Knote