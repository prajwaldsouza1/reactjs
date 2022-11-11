// // // import React from 'react'

// // // export default function list() {
     

// // // function Mobile(props){
 
// // //     return <li>I have a {props.brand}</li>;
 
// // // }
 
// // // function Mobile2 (){
 
// // //     const china=["Xiaomi","Realme","Apple"];
 
// // //     return(
 
// // //         <>
 
// // //         <h2>I am a guy</h2>
 
// // //         <ul>
 
// // //            { china.map((Item)=><Mobile brand={Item}/>)}
 
// // //         </ul>
 
// // //         </>
 
// // //     )
 
// // //  }
// // //  return (
// // //         <div>{Mobile2()}</div>
// // //       )
// // //     }
    
 
// // // // // // function Mobile(props){
 
// // // // // //     return<li> {props.sath}</li>
 
// // // // // // }
 
// // // // // // function Language(){
 
// // // // // //     const comp=["React","Node","Express","Php"]
 
// // // // // //     return(
 
// // // // // //         <>
 
// // // // // //         <h2>Programming Languages Known</h2>
 
// // // // // //         <ol>
 
// // // // // //             {comp.map((element)=><Mobile sath={element}/>)}
 
// // // // // //         </ol>
 
// // // // // //         </>
 
 
// // // // // //     )
 
// // // // // // }
 
// // // // // // function Mobile(props){
 
// // // // // //     return<li> {props.sath}</li>
 
// // // // // // }
 
// // // // // // function Language(){
 
// // // // // //     const Bikes=[
 
// // // // // //         {id:1,brand:'redmi'},
 
// // // // // //         {id:2,brand:'realme'},
 
// // // // // //         {id:3,brand:'oppo'}
 
// // // // // //     ];
 
// // // // // //     return(
 
// // // // // //         <>
 
// // // // // //         <h2>Programming Languages Known</h2>
 
// // // // // //         <ol>
 
// // // // // //             {Bikes.map((element)=><Mobile sath={element.brand}/>)}
 
// // // // // //         </ol>
 
// // // // // //         </>
 
 
// // // // // //     )
 
// // // // // // }
 

 
// // // // // function Sathwik(props){
 
// // // // //     return<li>{props.name},{props.ID}</li>
 
// // // // // }
 
// // // // // function Rovin(){
 
// // // // //     const sath=[
 
// // // // //         {id:1,course:"BCA"},
 
// // // // //         {id:2,course:"BBA"},
 
// // // // //         {id:3,course:"BSC"}
 
// // // // //     ];
 
// // // // //     return(
 
// // // // //         <>
 
// // // // //         <h2>Course available:</h2>
 
        
 
// // // // //         <ul>
 
// // // // //             {sath.map((item)=><Sathwik name={item.course}ID={item.id}/>)}
 
// // // // //         </ul>
 
// // // // //         </>
 
// // // // //     )
 
// // // // // }
 
// // // // //     return (
 
// // // // //     <div><Rovin/></div>
 
// // // // //   )
 
// // // // // }
 

// // //reactcss.jsx

// // import React from 'react'
// // import './style.css'
// // import img1 from './images/prajwal.jpg'
// // export default function list() {
    

// //     //   const myName={
     
// //     //     color:"red",
     
// //     //     backgroundColor:"black",
     
// //     //     padding:"20px",
     
// //     //     fontFamily:"Arial"
     
     
// //     //   }
     
    
// //       return (
     
// //         // <div><h2 style={myName}>. . . . .HELLO REACT........</h2></div>
// //         <div>
            
// //            < img src={img1} alt="" height='200px' width='200px' />
// //             <h2 className="sath rovin ">hello world</h2> 
          
// //         </div>
     
// //       )
     
// //     }



// //portfolio project
   


import React from 'react'
import './pro.css'
import img1 from './images/prg1.jpg'
export default function list() {
  return (

    <div>
         <div className="icon">
      <div className="sath"> 
      <div className="i-left">
       
      <h3 className="i-intro">Hello,my name is</h3>
      <h2 className="i-name"> prajwal Dsouza</h2>
      <div className="i-title">
        <h3 className="i-name1">Web developer</h3>
        <div className="i-subtitle">
          <h5 className="i-name2">I design and develop services for customers of all sizes,
          specializing in creating stylish,modern websites,web servers and online stores.</h5>
        </div>
      </div>

      </div>
      </div>
      <div className="rovin">
      <div className="i-right">< img src={img1} alt=""/></div>
      <div className="contactdet">
        <h5 className="i-name3">Email:prajwal@gmail.com</h5>
        <h5  className="i-name3">phno:9862765397</h5>
        <h5 className="i-name3">address:mangalore</h5>
      </div>
      </div>
        </div> 
    </div>
  )
}

     
     