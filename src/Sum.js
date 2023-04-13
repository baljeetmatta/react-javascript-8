import React, { useState } from 'react'
const Sum=()=>{
    const [result,setResult]=useState("");

   let first=0,second=0;
const changeHandler=(e)=>{
first=parseInt(e.target.value);

}

const changeHandler1=(e)=>{
    second=parseInt(e.target.value);

    
}
const sumHandler=()=>{
    setResult(first+second);

}
    return (

        <>
        <input type="text" onChange={changeHandler} />
        <input type="text" onChange={changeHandler1}/>
        <input type="text" value={result}/>
        <button onClick={sumHandler}>Sum</button>
        </>
    )

}
export default Sum;