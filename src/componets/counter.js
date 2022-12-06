import { Component } from "react";
import 'C:/Users/Lenovo/OneDrive/Documents/reactp/my/src/index.css'

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter: 0,
        };
        this.increment = this.increment.bind(this)
    }

    increment=()=>{
        this.setState({
            counter:this.state.counter+1,
        })
    }
    Decrement=()=>{
        this.setState({
            counter:this.state.counter-1,
        }

         )
    }
    render(){
        return<div className="counter"><div><h3><div className="cou">Count value: {this.state.counter}</div> </h3>
        <div className="in"><button onClick={this.increment}>Increment</button></div>
        </div>
        <div className="dc">
            <button onClick={this.Decrement}>Decrement</button></div></div>
    }
}

export default Counter