// import React from 'react'

// export default function conditional() {
//     // function Maths(){
//     //  return <h1>pass</h1>
//     // }
//     // function Science(){
//     //     return <h1>fail</h1>
//     //    }
//     //    function Exam(props){
//     //     const prajwal1=props.prajwal
//     //     if(prajwal1){
//     //         return<Maths />
//     //     }
//     //     return<Science />
        
//     //    }


    function Bca(){
        return <h1>bca</h1>
       }
       function Bsc(){
           return <h1>bsc</h1>
          }
             
          function Course(props){
           const developer=props.name

           if(developer=="csa"){
               return<Bca/>
           }
           return<Bsc />
           
          }
          return


//      function garage(){
//         return(
//             <>
//             <h2>prajwal</h2>
//             {cars.length > 3&&
//             <h2>
//                 you have {cars.length} cars in your garage
//                 </h2>}
//             </>
//         )
//      }
//      const cars=["ford","bmw","honda"];
//   return (
    
//     <div>{garage()}</div>
//   )
// }
