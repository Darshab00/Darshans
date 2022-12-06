import {useState} from "react";
// import { FunctionComponent } from "react";
// import Counter from "./counter";
export default function ConditionalComponet(){
    const[display,setDisplay]=useState(false);
    if(display){
        return(
            <div>
                <h3>This a Cconponet</h3>
            </div>
        )
    }else{
        return(
    <div>
        <h3>Nothing to see here</h3>
    </div>
        )
    }
}