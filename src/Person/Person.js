
import React from 'react';
import styled from 'styled-components';
// import './Person.css';
// import Radium from 'radium';


const PersonDivStyle=styled.div `
        width:60%;
        margin:16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding:16px;
        text-align: center;
        @media (min-width:500px):{
            width:450px
        }
    `;

const person=(props)=>{
    
    // const styles={
    //     '@media (min-width:500px)':{
    //         width:'450px'
    //     }
    // };
    return (
        <PersonDivStyle onClick={props.clickedItem}>
        {/* // <div className="App" style={styles} onClick={props.clickedItem} className="Person"> */}
            <p>My name is {props.name}.
            My age is {props.age}
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </PersonDivStyle>)
}

// export default Radium(person);
export default person;