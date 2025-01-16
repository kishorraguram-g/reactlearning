import React from "react";
class Car extends React.Component{
    constructor(){
        super();
        this.state = {color:'Red',model:'Ford'}
    }
    render(){
        return <>
        <h1>My Color is {this.state.color}  and my car model is {this.state.model}</h1>
        <button onClick={()=>{this.setState(previousState=>{return {...previousState,color:'Blue'}})}} >Click here</button>
        </>
    }
}

export default Car;