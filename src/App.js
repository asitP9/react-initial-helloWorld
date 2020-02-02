import React, {  Component } from 'react';
import './App.css';
import Person from './Person/Person';


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
      this.state={
        persons:[
          {id: 1, name:"abhisek", age: 29},
          {id: 2, name:"abhinav", age: 27},
          {id: 3, name:"Ravi", age: 26}
        ],
        showPersons:true
      }
    }

       switchNameHandler=()=>{
            const showPerson=this.state.showPersons;
            this.setState({
              showPersons:!showPerson
            })
       
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
          this.setState({
            persons:persons

          })
       }
    
       style={
         backgroundColor: 'white',
         font:'inherit',
         border: '1px solid blue',
         padding:'8px'

       }
       
      
    deleteThisItem(itemIndex){
      // This below line change the original Array, so we should try to delete the objects without changing the original Array, 
      // there are 2 ways to do RTCDtlsTransportStateChangedEvent.
      // let person=this.state.persons;
      // let person=this.state.persons.slice();
      let person=[...this.state.persons];
      person.splice(itemIndex,1);
      this.setState({
        persons:person
      })

    }
       
   
    render(){
      let persons=null;

     
        if(this.state.showPersons){
                persons=(
                  <div>
                    {
                      this.state.persons.map((person, index)=>{
                        return <Person name={person.name} age={person.age}  key={person.id} changeName={(event)=>this.changeNameHandler(event, person.id)}></Person>
                      })
                    }
                  </div>
                )
              }
              // clickedItem={this.deleteThisItem.bind(this,index)}
          {/* // persons=<div>
          //           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          //           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickedItem={this.changeNameHandler}>My Hobbies Racing</Person>
          //           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changeName={this.changeNameHandler}></Person>
          //         </div> */}
     
      return (
        <div className="App">
            I am in header noe
           <br></br>
           {/* This below method of passing an argument to the switchNameHandler is not recommended due to inefficiency and performance issues. */}
           {/* <button onClick={()=>this.switchNameHandler("Asit")} style={this.style}>Switch Names</button> */}
          
           <button onClick={this.switchNameHandler} style={this.style}>Conditional Show</button>

    {/* { this.state.showPersons===true?
    <div>
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickedItem={this.switchNameHandler.bind(this,"Asit")}>My Hobbies Racing</Person>
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changeName={this.changeNameHandler}></Person>
           </div>:null

         
      }   */}
      
           {persons}

         
      </div>
      );
    }
  }


export default App;



   
