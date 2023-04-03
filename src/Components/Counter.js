import React, { useState } from 'react'

export default function Counter() {

  const [count,setCount]=useState(0); 
  const up=()=>{
     let temp=count+1;
     setCount(temp);
  }
  const down=()=>{
    let temp=count-1;
    setCount(temp);
 }
 const reset=()=>{
    let temp=0;
    setCount(temp);
 }
  return (
    <div>
      <p>{count}</p>
      <button className="btn btn-primary mx-2" onClick={up}>Count Up</button>
      <button className="btn btn-danger mx-2" onClick={down}>Convert Down</button>
      <button className="btn btn-success mx-2" onClick={reset}>reset</button>
    </div>
  );
}
