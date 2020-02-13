import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{

    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js getDerivedStateFromProps]');
        return state;
    }

// if u r sure that this component will run everytime once the parent component changes then no need to add React Memo
//  as it is the extra amount of Code.
// As in should component update we can observe that we are checking for all props. 
// There is a PureComponent which is needed to be extended and it internally have ShouldComponentUpdate.
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     // persons object only gets change in case we type in input box or click any person
    //     if(nextProps.persons!==this.props.persons || nextProps.changeName!==this.props.changeName || nextProps.clickedItem!==this.props.clickedItem)
    //         return true;
    //     else
    //         return false;

    // }
    render(){
        return this.props.persons.map((person)=>{
            return <Person 
                    name={person.name} 
                    age={person.age}  
                    key={person.id} 
                    clickedItem={this.props.clickedItem.bind(this,person.id)}
                    changeName={(event)=>this.props.changeName(event, person.id)}
                    isAuthenticatePerson={this.props.isPersonAuthenticated}/>
            
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