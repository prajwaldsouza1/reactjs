// import React from 'react'

// export default function Task2() {
//     function Maths(){
//         return<h1>pass</h1>                  //conditional
//     }
//     function Science(){
//         return<h1>fail</h1>
//     }
    
//     function Exam(props){
//         const student=props.teacher1
//         if(student)
//         {
//            return <Maths />
//         }
//         {
//           return  <Science />
//         }
//     }
//   return (
//     <div><Exam teacher1={false}/></div>
//   )
// }
      

// import React from 'react'

// export default function Task2() {
//     function A(){
//         return<h1>prajwal</h1>
//     }
//     function B(){
//         return<h1>Glawin</h1>
//     }
//     function C(props){
//         const d=props.React
//         if(d=="cs")
//         {
//             return<A/>
//         }
//         {
//             return<B/>
//         }
//     }
//   return (
//     <div><C React="cs"/></div>
//   )
// }


// import React from 'react'

// export default function Task2() {
// function Fruits1(){
//     return(
//         <>
//         {Fruits.length>2 &&
//         <h2>
//             i have{Fruits.length} fruits in my hotel</h2>}
//         </>
//     )
// }
// const Fruits=["apple","orange","banana"]
//   return (
//     <div>{Fruits1()}</div>
//   )
// }



import React from 'react'

export default function Task2() {
    // function Rovin(){
    //     return<h1>hello</h1>
    // }
    // function Glawin(){
    //     return<h1>hi</h1>
    // }
    // function Name(props){
    //     const myname=props.Name
    //     if(myname)
    //     {
    //         return<Rovin/>
    //     }
    //     {
    //         return<Glawin/>
    //     }
    // }

    // function Rovin(){
    //     return <h1>hello</h1>
    // }
    // function Glawin(){
    //     return<h1>hi</h1>
    // }
    // function Name(props){
    //     const myname=props.Name
    //     if(myname=="cs")
    //     {
    //         return<Rovin/>
    //     }
    //     {
    //         return<Glawin />
    //     }
    // }



    function Rovin(){
        return(
            <>
            {animal.length >1 &&
            <h1>i have{animal.length}pets in my house</h1>}
            </>
        )
    }
    const animal=["cat","dog"]
  return (
    <div>{Rovin()}</div>
  )
}
