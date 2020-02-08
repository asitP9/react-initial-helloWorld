        import React, {useEffect} from 'react';
        import classes from './Cockpit.module.css';
        const Cockpit=(props)=>{
        // Here the useEffect is the alternative of the component lifecycle hooks (componentDidMount and componentDidUpdate) which is 
        // only applicable for state based components

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

             useEffect(
                ()=>{
                    console.log('[Cockpit.js] useEffect');
                    //...HTTPRequest
                    setTimeout(
                        ()=>{
                            alert("this alert should come only when the person variable change");
                        },1000
                    );
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
                            alert("this alert should come only when the person variable change");
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

                if (props.stateForCockpit.persons.length<=2)
                    Substantialclasses.push(classes.red);
                if (props.stateForCockpit.persons.length<=1)
                    Substantialclasses.push(classes.bold);
                if(props.stateForCockpit.showPersons){
                    btnClass.push(classes.Red);
                }


            return (
            <div>
        <span className={Substantialclasses.join(" ")}>{props.titleCockpit}</span>
                <br></br>
                <button onClick={props.switchNames} className={btnClass.join(" ")}>Conditional Show</button>
            </div>)
            };

            export default Cockpit;
