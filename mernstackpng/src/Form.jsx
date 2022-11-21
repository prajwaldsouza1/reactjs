import React,{useState} from 'react'

export default function Form() {
    const [state,setState]=useState({
        id:"",
        f:"",
        l:"",
    })
    let count=0
    const [tbl,setTbl]=useState([])
    const [nt,setNt]=useState([])
    const handlesubmit=(e)=>{
        let temp={...state}
        setState({
            f:"",
            l:"",
        })
        tbl.push(temp)
        setNt(tbl)
    }
    const handle=(e)=>{
        count=count+1
        setState({
            ...state,
            id:count,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div>
        <input type="text" name="f" placeholder='firstname' onChange={(e)=>{handle(e)}} value={state?.f}/>
        <input type="text" name="l" placeholder='lastname' onChange={(e)=>{handle(e)}} value={state?.l}/>
        <input type="submit" onClick={(e)=>{handlesubmit(e)}}/>
        <table border="1">
            <tr>
                <td>id</td>
                <td>firstname</td>
                <td>lastname</td>
                <td style={{textAlign:"center"}}>Actions</td>
            </tr>
            {nt.map((item,i)=>{
                return <tr>
                    <td>
                        {++i}

                    </td><td>
                        {item.f}
                    </td><td>
                        {item.l}
                    </td>
                </tr>
            })}
        </table>
        </div>
  )
}
