import React,{useState} from 'react'

export default function Studentform() {
    const[state,setState]=useState({
        Serial_No:"",
        Student_Name:"",
        Regno:"",
        Course:""

    })
    let count=0
    const[student,setStudent]=useState([])
    const[form,setForm]=useState([])
    const handlesubmit=(e)=>{
        let temp={...state}
        setState({
          Student_Name:"",
            Regno:"",
            Course:""
        })
        student.push(temp)
        setForm(student)
    }
    const handle=(e)=>{
        count=count+1
        setState({
            ...state,
            Serial_No:count,
           [e.target.name]:e.target.value 
        })
    }
  return (
    <div>
        <input type="text" name="Student_Name" placeholder="Student Name" onChange={(e)=>{handle(e)}} value={state?.Student_Name}/>
        <input type="text" name="Regno" placeholder="Regno" onChange={(e)=>{handle(e)}} value={state?.Regno}/>
        <input type="text" name="Course" placeholder="Course" onChange={(e)=>{handle(e)}} value={state?.Course}/>
        <input type="submit" onClick={(e)=>{handlesubmit(e)}}/>
        <table border="1">
            <tr>
                <td>Serial No</td>
                <td>Student Name</td>
                <td>Regno</td>
                <td>Course</td>
               
            </tr>
            {form.map((item,i)=>{
                return <tr>
                    <td>
                        {++i}
                    </td>
                    <td>
                        {item.Student_Name}
                    </td>
                    <td>
                        {item.Regno}
                    </td>
                    <td>
                        {item.Course}
                    </td>

                </tr>
            })}
        </table>
    </div>
  )
}
