import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
const ViewRecord1=()=>{

    const [data,setData]=useState({});
    const {x}=  useParams();
    
    useEffect(()=>{
        fetch("data.json")
        .then(response=>response.json())
        .then(res=> console.log(res));
        
        //    let result= res.filter((item)=>{
        //         if(item.id==x) 
        //         return true;
        //     })
        //     setData(result);
        

    },[])
  
  return (

    <>
    <table>
<tbody>
        <tr>
            <td>ID</td>
            <td>{data.id}</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>{data.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{data.age}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>{data.city}</td>
        </tr>
        </tbody>
    </table>
    </>
  )
}

export default ViewRecord1;



