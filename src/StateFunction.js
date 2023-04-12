import React, { useState } from 'react'
const StateFunction=()=>{

 const [data,setData]=  useState(0);
 
    let a=0;
    const clickHandler=()=>{
      //  a=a+1;
       // console.log(a);
     // data=data+1;
      setData(data+1);

    }

    return (
        <>
        <p>The value of a is {data}</p>
        <button onClick={clickHandler}>Clickme</button>
        </>
    )
}
export default StateFunction;