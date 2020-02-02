
import React from 'react';
import './Person.css';

const person=(props)=>{
    return (
        <div className="App" onClick={props.clickedItem} className="Person">
            <p>My name is {props.name}.
            My age is {props.age}
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default person;