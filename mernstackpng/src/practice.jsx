// import React from 'react'

// export default function practice() {                    //classses
 
 
//     //class Bike{
//     //     constructor(name1){
//     //         this.brand=name1
//     //     }
//     //     present(){
//     //         return 'i have a ' +this.brand
//     //     }
//     // }
    
//     // const mycar=new Bike("car")

// // class rovin{
// //     constructor(prajwal){
// //     this.dsouza=prajwal
// //     }
// //     present(){
// //         return 'i am from '+this.dsouza
// //     }
// // }
// //     const myname=new rovin("mangalore")


// // class rovin{
// //     constructor(name){
// //         this.name=name
// //     }
// //     present(){
// //         return 'my name is' +this.name
// //     }
// // }
// // const myname=new rovin("prajwal")


    
//                                                                        //classes

//     // class Rovin{
//     //     constructor(name){
//     //         this.rovin=name
//     //     }
//     // }
//     // class Glawin{
//     //     constructor(model){
//     //         this.glawin=model
//     //     }
//     //     present(){
//     //         return 'i have a  '+this.glawin
//     //     }
//     // }
//     //  class Glen extends Glawin{
//     //     constructor(name,model){
//     //         super(name);
//     //         this.model=model
//     //     }
//     //     show(){
//     //         return this.present()+',that is a ' +this.model
//     //     }
//     //  }
//     //  const myname=new Glen("car","bmwggg")


//     // class tiger{
//     //     constructor(name){
//     //         this.tiger=name
//     //     }
//     // }
//     // class lion{
//     //     constructor(model1){
//     //         this.lion=model1
//     //     }
//     //     present(){
//     //         return'my name is'+this.lion
//     //     }
//     // }
//     // class Man extends lion{
//     //     constructor(name,model1){
//     //         super(name);
//     //         this.prajwal=model1
//     //     }
//     //     show(){
//     //         return this.present()+',i am from' +this.prajwal
//     //     }
//     // }
//     // const myname=new Man("prajwalllll","bajpe")



//     // class rovin{
//     //     constructor(lion){
//     //         this.rovin=lion
//     //     }
//     // }
//     // class glawin{
//     //     constructor(name1){
//     //         this.glawin=name1
//     //     }
//     //     present(){
//     //         return 'i am from' +this.glawin
//     //     }
//     // }
//     // class glen extends glawin{
//     //     constructor(name,name1){
//     //         super(name);
//     //         this.glen=name1
//     //     }
//     //     show(){
//     //         return this.present()+',my name is '+this.glen
//     //     }
//     // }
//     // const myname=new glen("bajpe","prajwal")
// //     return ( 

// //     <div>{myname.show()}</div>
// //   )




//                                                                   //arraymethods

// // const animals=["lion","tiger"]

// // return(
// //     <div>
// //        {animals.map((item)=>{
// //         return item
// //        }
// //          )}
// //     </div>
// // )

//     // const bill=[5+10,2+3]
//     // const amt1=bill[0];
//     // const amt2=bill[1];
//     // const[amount1,amount2]=bill
//     // return(
//     //     <div>{amt1}</div>
//     // )




//                                                                          //arrow

// //  const show=function(){
// //     return 'this is an error message'
// //   }



// // const add=()=>{
// //     let a=5;
// //     let b=5;
// //     let c=a+b;
// //     console.log("total:",c)
// // }
// // return(
// //     <div>
// //         {add()}
// //         <input type="text" name=""></input>
// //         <input type="submit" onClick={add} name="click"/>
// //     </div>
// // )



//                                                                          //conditional


// // function Rovin(){
// //     return<h1>hi</h1>
// // }
// // function Glawin(){
// //     return<h1>hello</h1>
// // }
// // function Exam(props){
// //     const prajwal=props.prajwal
// //     if(prajwal)
// //     {
// //         return<Rovin />
// //     }
// //     {
// //         return<Glawin />
// //     }

// // }


// // function Maths(){
// //     return<h1>pass</h1>
// // }
// // function Science(){
// //     return<h1>fail</h1>
// // }
// // function Exam(props){
// //     const test=props.result
// //     if(test=="cs")
// //     {
// //         return<Maths />
// //     }
// //     {
// //         return<Science />
// //     }
// // }
// // return(
// //     <div><Exam result="cs"/></div>
// // )


//                                                              //destructuring using object
//  //let result;
// //     const college={
// //         name:"prajwal",
// //         course:"diploma",
// //         regno:"2344",
// //         email:"kk@gmail.com"
// // }
// // const employee={
// //     name:"abc",
// //     designation:"software developer",
// //     experience:"23 years",
// //     email:"abc@" 
// // }

// //                                                          //destructure using nested objects
// // const employee={
// //         name:"abc",
// //         designation:"software developer",
// //         experience:"23 years",
// //         email:"abc@" ,
// //         stream:{
// //             mca:"pru",
// //             bca:"50"
    
// //         }
// //     }
// //         myCompany(employee)
          
// //         function myCompany({name,designation,experience,email,stream:{mca,bca}}){
// //             result='my name is '+name+ ' I am a ' +designation+ 'and i have  ' +experience+ ' experience.'+ ' my email id is ' +email +'my stream is';
// //         }
// //       return (
// //         <div>{result}</div>
// //       )

//     //  let result;
//     //   const business={
//     //     name:"prajwal",
//     //     age:"20",
//     //     salary:"20000"
//     //   }
//     //   name1(business)
//     //   function name1({name,age,salary}){
//     //     result='my name is'+""+name+""+'my salary'+""+salary+'my age'+""+age;
//     //   }
//     //   return(
//     //     <div>{result}</div>
//     //   )



//                                                                                //ternary

// //     const a=1000;
// // return( 
// // <div>
    
// //     {a == "100"?<h1 style={{color:"red"}}>paid</h1>:
// // <h1 style={{color:"blue"}}>not paid</h1>}
// // </div>
// // )

// // const bill="100"
// // return(
// //     <div>
// //         {bill=="100" ? <h1 style={{color:"red"}}>paid</h1>:
// //         <h1 style={{color:"blue"}}>kaj</h1>}
// //     </div>
// // )




//                                                                           //spreadoperator
//     // const animals=["tiger","lion"] 
//     // const fruits=["apple","orange"]

//     // const c=[...animals,...fruits    ]


//     // return(
//     //     <div>{animals}</div>
//     // )
  

//     // const rovin={
//     //     name:"prajwal",
//     //     age:"20",
//     //     salary:"10000"
//     // }
//     // const glawin={
//     //     name:"prajwal",
//     //     age:"20",
//     //     salary:"10000"
//     // }
//     // const c={...rovin,...glawin}
//     // return(
//     //     <div>
//     //         {console.log(c)}
//     //     </div>
//     // )


//                                                                                 //props
//     // function Car(props){
//     //     return<h1>i am having a {props.abc}!</h1>;
//     // }
//     // const myElement =<Car abc="Ford"/>


//     // function Rovin(props){
//     //     return<h1>my name is{props.name}</h1>
//     // }
//     // const myName=<Rovin name="prajwal"/>
//     // return(
//     //     <div>{myName}</div>
//     // )


//     // function A(props){
//     //     return<h1>my car name is{props.abc}</h1>
//     // }

//     // function  B(){
//     //     const carname="bmw"
//     //     return(
//     //         <>
//     //         <h1>my car name</h1>
//     //         <A abc={carname}/>
//     //         </>
//     //     )
//     // }  


//     // function Rovin(props){
//     //     return<h1>my name is {props.name}</h1>
//     // }
//     // function Glawin(){
//     //     const name="rovin"
//     //     return(
//     //         <>
//     //         <h1>hello good morning</h1>
//     //         <Rovin name={name}/>
//     //         </>
//     //     )
//     // }
//     //const name=<Rovin name="prajwal"/>
//     return(
//         <div>{mycar.present()}</div>
//     )                                                                         



// }
