import React,{useState} from 'react'
import './shop.css'
export default function Employeeform() {
  const [state,setState]=useState({
    empid:"",
    empname:"",
    email:"",
    address:"",
    designation:"",
    mobileno:""
  })
  let count=0
  const[task,setTask]=useState([])
  const[name,setName]=useState([])
  const handlesubmit=(e)=>{
    let temp={...state}
    setState({
        empname: "",
        email: "",
        address: "",
        designation: "",
        mobileno: ""
    })

  task.push(temp)
  setName(task)

  }

 const handle=(e)=>{
        count=count+1;
        setState({
            ...state,
            empid:count,
            [e.target.name]:e.target.value
        })
    }
 
  return (
    <div className="i-right2">
      <div className="i-right1"><input type="text" name="empid" placeholder="ID" onChange={(e)=>{handle(e)}} value={state?.empid}/></div>
      <div className="i-right1"> <input type="text" name="empname" placeholder="Name" onChange={(e)=>{handle(e)}} value={state?.empname}/></div>
      <div className="i-right1"><input type="text" name="email" placeholder="Email" onChange={(e)=>{handle(e)}} value={state?.email}/></div>
      <div className="i-right1"> <input type="text" name="address" placeholder="Address" onChange={(e)=>{handle(e)}} value={state?.address}/></div>
      <div className="i-right1"><input type="text" name="designation" placeholder="Designation" onChange={(e)=>{handle(e)}} value={state?.designation}/></div>
      <div className="i-right1"><input type="text" name="mobileno" placeholder="Mobileno" onChange={(e)=>{handle(e)}} value={state?.mobileno}/></div>
      <div className="i-right1"> <input type="submit" onClick={(e)=>{handlesubmit(e)}}/></div>
      <table border="1">
        <tr>
        <td>Employeeid</td>
        <td>Employeename</td>
        <td>Email</td>
        <td>Address</td>
        <td>Designation</td>
        <td>Mobileno</td>
        </tr>


        {name.map((item,i)=>{
                return <tr>
                    <td>
                        {++i}

                   </td> <td>
                        {item.empname}
                    </td><td>
                        {item.email}
                    </td>
                    <td>
                        {item.address}
                    </td>
                    <td>
                        {item.designation}
                    </td>
                    <td>
                        {item.mobileno}
                    </td>
                </tr>
            })}
      </table>
    </div>
  )
}
