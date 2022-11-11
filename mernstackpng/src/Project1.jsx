// // // import React from 'react'
// // // import {name,address,email,phno,age} from './project'
// // // import {name1,address2,email2,phno2,age2} from './project'
// // // export default function Project1() {
// // //   return (
// // //     <div>  
// // //       <h1>student data</h1>  
// // //         <table border="2" bgcolor="aqua" >
// // //     <tr>
      
// // //         <th>name</th>
// // //         <th>address</th>
// // //         <th>email</th>
// // //         <th>Phone_no</th>
// // //         <th>age</th>
// // //     </tr>
    
// // //     {/* <tr> */}
      
// // //         <td>{name}</td>
// // //         <td>{address}</td>
// // //         <td>{email}</td>
// // //         <td>{phno}</td>
// // //         <td>{age}</td>
// // //     </tr> 
// // // </table> 
// // //       <h1>teacher data</h1>  
// // //         <table border="2" bgcolor="aqua" >
// // //     <tr>
      
// // //         <th>name</th>
// // //         <th>address</th>
// // //         <th>email</th>
// // //         <th>Phone_no</th>
// // //         <th>age</th>
// // //     </tr>
    
// // //     <tr>
      
// // //         <td>{name}</td>
// // //         <td>{address}</td>
// // //         <td>{email}</td>
// // //         <td>{phno}</td>
// // //         <td>{age}</td>
// // //     </tr> 
// // // </table>
// // //     </div>
// // //   )
// // // }

  

// // // // // //spread operator
// // // // // import React from 'react'

// // // // // export default function Project1() {
// // // // //     const a=["1","2","3","4","5"];
// // // // //     const b=["6","7"];
     
// // // // //     const [num1,num2,...rest]=a;
    
// // // // //   return (
// // // // //     <div>{rest}</div>
// // // // //   )
// // // // // }


// // // // // // //ternary operator

// // // // // import React from 'react'

// // // // // export default function Project1() {
// // // // //     const color="red"

// // // // //   return (
// // // // //     <div>
// // // // //         {color=="blue"? <h1 style={{color:"red"}}>match</h1>
// // // // //       :<h1 style={{color:"aqua"}}>not match</h1>}
// // // // //     </div>
// // // // //   )
// // // // // }


// // //props

// // import React from 'react'

// // export default function Project1() {
// //   function Animal(props){
// //     return <h1>i am having a {props.lion}</h1>
// //   }
// //   const myanimal=<Animal lion="pen"/>
// //   return (
// //     <div>{myanimal}</div>
// //   )
// // }


// // // // import React from 'react'

// // // // export default function Project1() {
// // // //   function Books(props){
// // // //     return <h1>where is my{props.book}</h1>
// // // //   }
// // // //   const book=<Books book="book"/>
// // // //   return (
// // // //     <div>{book}</div>
// // // //   )
// // // // }


// // // // import React from 'react'

// // // // export default function Project1() {
// // // //   function Rovin(props){
// // // //     return <h2>my name is {props.name}</h2>
// // // //   }

// // // //   function Sathwik(){
// // // //     return (
// // // //     <>
// // // //     {/* <h1>my name is darshan</h1> */}
// // // //     <Rovin name="sathwik"/>
// // // //     </>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <div>{Sathwik()}</div>
// // // //   )
// // // // }

// // // // import React from 'react'

// // // // export default function Project1() {
// // // //   function Glen(props){
// // // //     return <h1>my name is {props.name}</h1>
// // // //   }
// // // //   function Glawin(){
// // // //     const myname="glen"
// // // //     return(
// // // //       <>
// // // //       {/* <h3>my name is glawin</h3> */}
// // // //       <Glen name={myname}/>
// // // //       </>
// // // //     )
// // // //   }
// // // //   return (
// // // //     <div>{Glawin()}</div>
// // // //   )
// // // // }


// // // // import React from 'react'

// // // // export default function Project1() { 
// // // //   function Sony(props){
// // // //     return<h2>my name is {props.name}</h2>
// // // //   }
// // // //   function Colors(){
// // // //     const mychannel="Sony"
// // // //     return(
// // // //       <>
// // // //       <Sony name={mychannel}/>
// // // //       </>
// // // //     )
// // // //   }
// // // //   return (
// // // //     <div>{Colors()}</div>
// // // //   )
// // // // }


// // // import React from 'react'

// // // export default function Project1() {
// // //   function Tiger(props){
// // //     return<h3>i am a {props.name.name1}</h3>
// // //   }
// // //   function Lion(){
// // //     const myanimmal={name1:"lion",brand:"kpt"}
// // //     return(
// // //       <>
// // //       <Tiger name={myanimmal}/>
// // //       </>
// // //     )
// // //   }
// // //   return (
// // //     <div>{Lion()}</div>
// // //   )
// // // }

// // import React from 'react'

// // export default function Project1() {
// //   function Car(props){
// //     return<h1>my name is {props.name}</h1>
// //   }
// //   const car=<Car name="sathwik"/>
// //   return (
// //     <div>{car}</div>
// //   )
// // }









// import React from 'react'

// export default function Project1() {
//   // function Glen(props){
//   //   return<h1>my name is {props.glen}</h1>
//   // }
//   // const myname=<Glen glen="glen"/>             // my name is glen



//   // function Rovin(props){
//   //   return<h1>my name is {props.name}</h1>
//   // }
//   // function Glawin(){
//   //   const myname="glawin"
//   //   return(
//   //     <Rovin name={myname}/>
//   //   )
//   // }



// //   function Rovin(props){
// //     return<h1>my name is {props.name}</h1>
// //   }
// //   function Glawin(){
// //     return(
      
// //       <Rovin name="glawin"/>
// //     )
// //   }
// //   return (
// //     <div>{Glawin()}</div>
// //   )
// // }

// function Rovin(props){
//   return<h1>my name is {props.name.name1} iam from {props.name.from}</h1>
// }
// function Glawin(){
//   const myname={name1:"prajwal",from:"bajpe"}
//   return(
//     <Rovin name={myname}/>
//   )
// }
// return(
//   <div>{Glawin()}</div>

// )
// }



//conditional .jsx


// import React from 'react'

// export default function Project1() {
//     function Exam1(){
//       return  <h1>pass</h1>
//     }
//     function Exam2(){
//         return <h2>Fail</h2>
//     }
//     function Result(props){
//         const teacher=props.teacher
//         if(teacher)
//         {
//             <Exam1 />
//         }
//         {
//             <Exam2 />
//         }
//     }
//   return (
//     <div>{Result()}</div>
//   )
// }
