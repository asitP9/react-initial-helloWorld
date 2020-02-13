
import React, {Component} from 'react';
// import styled from 'styled-components';
// import './Person.css';
// import Radium from 'radium';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClasses from '../../../hoc/withClasses';
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context';


// const PersonDivStyle=styled.div `
//         width:60%;
//         margin:16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         padding:16px;
//         text-align: center;
//         @media (min-width:500px):{
//             width:450px
//         }
//     `;

    class Person extends Component{
         
        constructor(props){
            super(props);
            this.inputElementRef=React.createRef();

        }
        static contextType=AuthContext;

        componentDidMount(){
            // this.inputElement.focus();
            this.inputElementRef.current.focus();
            console.log("Person.js authenticate",this.context.authenticate);
        }
      
        
        render(){
            return (
                // <PersonDivStyle onClick={props.clickedItem}>
            //    <div className="App" style={styles} onClick={props.clickedItem} className="Person"> 
                    
            // <div className={classes.Person} onClick={this.props.clickedItem} > 
                //    [ <p key="item1">My name is {this.props.name}. My age is {this.props.age}</p>,
                //     <p key="item2">{this.props.children}</p>,
                //     <input type="text" onChange={this.props.changeName} value={this.props.name} key="item3"/>
                //    ]
                // </div>


                // <WithClasses classes={classes.Person}>
                //     <p key="item1">My name is {this.props.name}. My age is {this.props.age}</p>
                //     <p key="item2">{this.props.children}</p>
                //     <input type="text" onChange={this.props.changeName} value={this.props.name} key="item3"/>
                // </WithClasses>
                

                <Aux>
                    {/* <AuthContext.Consumer> */}
                         {this.context.authenticate?<p>Logged In</p>:<p>Please Log In</p>} 
                   
                    {/* </AuthContext.Consumer> */}
                    <p key="item1">My name is {this.props.name}. My age is {this.props.age}</p>
                    <p key="item2">{this.props.children}</p>
                    {/* <input type="text" onChange={this.props.changeName} ref={(inputElem)=>{this.inputElement=inputElem}} value={this.props.name} key="item3"/> */}
                    <input type="text" onChange={this.props.changeName} ref={this.inputElementRef} value={this.props.name} key="item3"/>

                </Aux>
            );
        }
    }

    Person.propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        changeName:PropTypes.func
     };
// export default Radium(person);
export default withClasses(Person, classes.Person);