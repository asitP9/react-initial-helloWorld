import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{

    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js getDerivedStateFromProps]');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;

    }
    render(){
        return this.props.persons.map((person)=>{
            return <Person 
                    name={person.name} 
                    age={person.age}  
                    key={person.id} 
                    clickedItem={this.props.clickedItem.bind(this,person.id)}
                    changeName={(event)=>this.props.changeName(event, person.id)}/>
            
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforUpdate');
        return null;

    }

    componentDidUpdate(){
        console.log('[Persons.js] ComponentDidUpdate');
    }

}

  export default Persons;