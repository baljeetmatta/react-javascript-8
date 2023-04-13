import React, { useState } from 'react';
const UI=()=>{
//let dataText="Sample"
const [data,setData]=useState("");
    const changeHandler=(e)=>{
        //console.log(e);
        setData(e.target.value);

    }
const clickHandler=()=>{
   // alert(dataText);
   setData("Hello");


}
    return (

        <>
        <input value={data} type="text" onChange={changeHandler}/>
        <button onClick={clickHandler}>Show</button>

        </>
    )
}
export default UI;