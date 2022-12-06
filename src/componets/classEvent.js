import { Component } from "react";
class ClassEvent extends Component{
    handleClick(){
        console.log("class based handling")
        return{
        }
    }
    render(){
        return(
            <div>
                this is a class Event 
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ClassEvent;