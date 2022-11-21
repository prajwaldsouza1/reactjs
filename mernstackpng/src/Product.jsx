import React,{useState,useEffect} from 'react'
import './shop.css'
export default function Useeffect() {
    useEffect(()=>{
        alert("Welcome Admin")
    },[])//empty array
    const [state,setState]=useState({
        product_id:"",
        product_name:"",
        product_code:"",
        category:"",
        product_description:"",
        quantity:""
      })
      let count=0
      const[product,setProduct]=useState([])
      const[name,setName]=useState([])
      const handlesubmit=(e)=>{
        let temp={...state}
        setState({
        product_id:"",
        product_name:"",
        product_code:"",
        category:"",
        product_description:"",
        quantity:""
        })
    
      product.push(temp)
      setName(product)
    
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
    <div>
        <div className="i-right2">
      <div className="i-right1"><input type="text" name="product_id" placeholder="ID" onChange={(e)=>{handle(e)}} value={state?.product_id}/></div>
      <div className="i-right1"> <input type="text" name="product_name" placeholder="Name" onChange={(e)=>{handle(e)}} value={state?.product_name}/></div>
      <div className="i-right1"><input type="text" name="product_code" placeholder="code" onChange={(e)=>{handle(e)}} value={state?.product_code}/></div>
      <div className="i-right1"> <input type="text" name="category" placeholder="category" onChange={(e)=>{handle(e)}} value={state?.category}/></div>
      <div className="i-right1"><input type="text" name="product_description" placeholder="Description" onChange={(e)=>{handle(e)}} value={state?.product_description}/></div>
      <div className="i-right1"><input type="text" name="quantity" placeholder="quantity" onChange={(e)=>{handle(e)}} value={state?.quantity}/></div>
      <div className="i-right1"> <input type="submit" onClick={(e)=>{handlesubmit(e)}}/></div>
      </div>
      <table border="1" bgcolor='aqua'>
        <tr>
        <td>product id</td>
        <td>product name</td>
        <td>product code</td>
        <td>category</td>
        <td>description</td>
        <td>quantity</td>
        </tr>


        {name.map((item,i)=>{
                return <tr>
                    <td>
                        {++i}

                   </td> <td>
                        {item.product_name}
                    </td><td>
                        {item.product_code}
                    </td>
                    <td>
                        {item.category}
                    </td>
                    <td>
                        {item.description}
                    </td>
                    <td>
                        {item.quantity}
                    </td>
                </tr>
            })}
      </table>
    </div>
  )
}

