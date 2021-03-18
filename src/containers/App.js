import React, {  Component } from 'react';
import classes from './App.module.css';
// import Radium, {StyleRoot} from 'radium';
import Person from '../components/Persons/Person/Person';
// import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClasses from '../hoc/withClasses';
import AuthContext from '../context/auth-context';

// const StyledButtonWithHovered= styled.button `
//         background-color: ${props=>props.alt?'red':'green'};
//         color:white;
//         font:inherit;
//         border: 1px solid blue;
//         padding:8px;
//         &:hover{
//           background-color:${props=>props.alt?'salmon':'LightGreen'};
//           color:black;
//         }
// `;

  // const App=props=>{
  //     const [personState, changePersonState]=useState({
  //       persons:[
  //         {name:"abhisek", age: 29},
  //         {name:"abhinav", age: 27},
  //         {name:"Ravi", age: 26}
  //       ],
  //       // otherState:'I am other state'
  //     });

  //     const [otherState] = useState("I am some Other State");
  //   const switchNameHandler=()=>{
  //       changePersonState({
  //         persons:[
  //           {name:"abhisek Maharana", age: 21},
  //           {name:"abhinav", age: 19},
  //           {name:"Ravi", age: 18}
  //         ]
      
  //       });
  //     };

  //         console.log("PersonState",personState, "other state", otherState);

  //     return (
  //       <div className="App">
  //          I am in header noe
  //         <br></br>
  //          <button onClick={switchNameHandler} >Switch Names</button>
    
  //         <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
  //         <Person name={personState.persons[1].name} age={personState.persons[1].age} clickedItem={switchNameHandler}>My Hobbies Racing</Person>
  //         <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
  //       </div>
  //     );

  // }



  class App extends Component{
    constructor(props){
      super(props);
      console.log('[App.js] Constructor', props);
      this.state={
        persons:[
          {id: 1, name:"abhisek", age: 29},
          {id: 2, name:"abhinav", age: 27},
          {id: 3, name:"Ravi", age: 26}
        ],
        showPersons:true,
        showCockpit:true,
        personCounter:0,
        isAuthenticated:false
      }
    }

    switchNameHandler=()=>{
        const showPerson=this.state.showPersons;
        this.setState({
          showPersons:!showPerson
        })
    
    }

    authenticateHandler=()=>{
    //  debugger;
      this.setState({
        isAuthenticated:true
      });
    }
    changeNameHandler=(event, id)=>{
      const personIndex=this.state.persons.findIndex(
        (p)=>{
          return id===p.id;
        }
      )
      const person={...this.state.persons[personIndex]};

      person.name=event.target.value;

      const persons=[...this.state.persons];
      
      persons[personIndex]=person;
      this.setState(
        (prevState, props)=>{
          return {
            persons:persons,
            personCounter: prevState.personCounter+1
          }
        })
    }
    
    static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return null;
    }   
      
    deleteThisItem(itemIndex){
      // This below line change the original Array, so we should try to delete the objects without changing the original Array, 
      // there are 2 ways to do RTCDtlsTransportStateChangedEvent.
      // let person=this.state.persons;
      // let person=this.state.persons.slice();


      let person=[...this.state.persons];
      const idIndex=this.state.persons.findIndex(
        (person)=>{
          return person.id===itemIndex;
        }
      )
      person.splice(idIndex,1);
      this.setState({
        persons:person
      })
    }
       

     render(){


      // Below style is used for radium related features and they gets removed once we use styled this styled component.
      // const style={
      //   backgroundColor: 'green',
      //   color:'white',
      //   font:'inherit',
      //   border: '1px solid blue',
      //   padding:'8px',
      //   ':hover':{
      //     backgroundColor:'LightGreen',
      //     color:'black'
      //   }

      // }
      let persons=null;
      console.log('[App.js] render');
     
      if(this.state.showPersons){
              persons=(
                <div>
                <Persons 
                  persons={this.state.persons} 
                  changeName={this.changeNameHandler} 
                  clickedItem={this.deleteThisItem.bind(this)}
                  isPersonAuthenticated={this.state.isAuthenticated}/>
                </div>
                // <div>
                //   {
                //     this.state.persons.map((person, index)=>{
                //       return <Person name={person.name} age={person.age}  key={person.id} changeName={(event)=>this.changeNameHandler(event, person.id)} clickedItem={()=>this.deleteThisItem(person.id)}></Person>
                //     })
                //   }
                // </div>
              );

             
              // style.backgroundColor="red";
              // style[':hover']={
              //   backgroundColor:'salmon',
              //   color:'black'
              // }
            }
          

              // clickedItem={this.deleteThisItem.bind(this,index)}
          {/* // persons=<div>
          //           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          //           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickedItem={this.changeNameHandler}>My Hobbies Racing</Person>
          //           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changeName={this.changeNameHandler}></Person>
          //         </div> */}


     
      return (


        // Here below the styleroot has been implemented because of media query used in person.js. The stylerot has been imported 
        // from radium

        // <div className={classes.App}>


        <Aux>
        {/* // <StyleRoot> */}
        <button onClick={()=>{
          this.setState({
            showCockpit:false
          })
        }}>Remove Cockpit</button>
        <AuthContext.Provider value={{authenticate:this.state.isAuthenticated,
              login:this.authenticateHandler}}>
        {this.state.showCockpit===true? 
        
        <Cockpit  
              personLength={this.state.persons.length}  
              switchNames={this.switchNameHandler}
              titleCockpit={this.props.appTitle}
              showPerson={this.state.showPersons}
              // authenticate={this.authenticateHandler}
              />:null}

          


            {/* This below method of passing an argument to the switchNameHandler is not recommended due to inefficiency and performance issues. */}
            {/* <button onClick={()=>this.switchNameHandler("Asit")} style={this.style}>Switch Names</button> */}
            
            {/* <StyledButtonWithHovered alt={this.state.showPersons} onClick={()=>this.switchNameHandler()}>Conditional Show</StyledButtonWithHovered> */}


    {/* { this.state.showPersons===true?
    <div>
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickedItem={this.switchNameHandler.bind(this,"Asit")}>My Hobbies Racing</Person>
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changeName={this.changeNameHandler}></Person>
           </div>:null
    }   */}
          {persons}
          </AuthContext.Provider>
        </Aux>

        
         // </StyleRoot>
      );
    }

    componentDidMount(){
      console.log('[App.js] componentDidMount');
    }
  }


// export default Radium(App);
export default withClasses(App, classes.App);



   
