import React from 'react'
const  Greeting=(props)=>{

    // const clickHandler=()=>{

    //         alert("Called");

    // }
    //console.log(x);
    return (
    <>
    <p>Greeting to {props.name}</p>
    <button onClick={props.handleClick}>{props.value}</button>
    </>
    )
}
export default Greeting;
