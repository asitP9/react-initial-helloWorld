        import React, {useEffect, useRef, useContext} from 'react';
        import classes from './Cockpit.module.css';
        import AuthContext from '../../context/auth-context';
        const Cockpit=(props)=>{

          const toggleBtnRef=useRef(null);
            const contextTypeTemp=useContext(AuthContext);
        // Here the useEffect is the alternative of the component lifecycle hooks (componentDidMount and componentDidUpdate which is 
        // only applicable for state based components)

        // Problem with useeffect is that it always renders whenver the component is started
            
        
        // useEffect(
            //     ()=>{
            //         console.log('[Cockpit.js] useEffect');
            //         //...HTTPRequest
            //         setTimeout(
            //             ()=>{
            //                 alert("this alert should come only when the person variable change");
            //             },1000
            //         )
            //     }, [props.stateForCockpit.persons]
            // )


            // To run useEffect only one time use empty array
            // The claenup is called once the remove Cockpit is called from applicationCache.js

             useEffect(
                ()=>{
                    console.log('[Cockpit.js] useEffect');
                    //...HTTPRequest
                    // setTimeout(
                    //     ()=>{
                    //         // alert("this alert should come only when the person variable change");
                    //     },1000
                    
                    // );
                    toggleBtnRef.current.click();
                    return (
                        ()=>{
                            console.log("[cockpit.js] cleanup work in 1st useEffect")
                        }
                    )
                }, []
            )

            // we can observe in the below situation that 'cleanup work in second useEffect'  is displayed before '2nd useEffect'

             useEffect(
                ()=>{
                    console.log('[Cockpit.js] 2nd useEffect');
                    //...HTTPRequest
                    setTimeout(
                        ()=>{
                            // alert("[2nd useEffect]  this alert should come only when the person variable change");
                        },1000
                    );
                    return(
                        ()=>{
                            console.log('[cockpit.js] cleanup work in second useEffect');
                        }
                    )

                },

            )


            let btnClass=[classes.Button];
            const Substantialclasses=[classes.heading];

                if (props.personLength<=2)
                    Substantialclasses.push(classes.red);
                if (props.personLength<=1)
                    Substantialclasses.push(classes.bold);
                if(props.showPersons){
                    btnClass.push(classes.Red);
                }


            return (
                <div>
                    <span className={Substantialclasses.join(" ")}>{props.titleCockpit}</span>
                    <br></br>
                    <button onClick={props.switchNames} className={btnClass.join(" ")} ref={toggleBtnRef}>Conditional Show</button>
                    {/* <AuthContext.Consumer> */}
                        {/* {(context)=> */}
                            <button onClick={contextTypeTemp.login}>Log IN</button>
                        {/* } */}
                    {/* </AuthContext.Consumer> */}
               </div>)
            };


            // React Memo is a great way of also getting optimisation for your functional component and therefore 
            // It is a good idea to wrap the functional components that might not need to update with every change in the parent component 
            // with it. It is an alternative to shouldComponentUpdate used in class based components.

            // if u r sure that this component will run everytime then no need to add React Memo as it is the extra amount of Code.
            export default React.memo(Cockpit);
