import React,{useState,useEffect} from 'react'

export default function Useeffect() {
   
    const[num,setNum]=useState(0);
    const[num2,setNum2]=useState(0);
    useEffect(()=>{
      alert("hello useeffect")
  },[num,num2])//empty array
  return (
    <div>
        <button onClick={()=>{
            setNum(num+1)
        }}>click me{num}</button>


<button onClick={()=>{
            setNum2(num2+1)
        }}>click me{num2}</button>




        {/* <button onClick={(()=>{
          setNum(num+1)},()=>{
            alert('hello');

          }
        )}>click me{num}</button> */}
    </div>
  )
}
