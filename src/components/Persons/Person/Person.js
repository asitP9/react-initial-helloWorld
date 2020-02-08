
import React, {Component} from 'react';
import styled from 'styled-components';
// import './Person.css';
// import Radium from 'radium';
import classes from './Person.module.css';


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

    class Person extends Component{
         render(){
            return (
                // <PersonDivStyle onClick={props.clickedItem}>
            //    <div className="App" style={styles} onClick={props.clickedItem} className="Person"> 
                    
            <div className={classes.Person} onClick={this.props.clickedItem} > 
                    <p>My name is {this.props.name}.
                    My age is {this.props.age}
                    </p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changeName} value={this.props.name}/>
                </div>
            )
        }
    }

// export default Radium(person);
export default Person;