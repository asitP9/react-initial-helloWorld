import React from 'react'; 


// ONE WAY
// const withClasses=(props)=>{
//     return (<div className={props.classes}>
//             {props.children}
//         </div>)
// }


// ANOTHER WAY---here WrappedComp is the custom name. 
// Here the placement of props bring  a crucial role role dont mistaken it.
// Here we have a function which returns a function. the function which is returned is functionl component

// But here 1 issue we are getting it ...if it is used in personalbar, person component will be wrapped inside withClasses but no props, 
// therefore we add props here
const withClasses=(WrappedComp, className)=>{
    return props=>(<div className={className}>
                <WrappedComp {...props}/>
            </div>);
}

export default withClasses;

