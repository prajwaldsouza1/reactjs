import React,{useState} from 'react'
import './shop.css'

export default function Shop() {
    

    const[Pd1,setPd1]=useState("")
    const[Pd2,setPd2]=useState("")
    const[Pd3,setPd3]=useState("")
    const[Pd4,setPd4]=useState("")
    const[Pd5,setPd5]=useState("")
    const[Pd6,setPd6]=useState("")
    

    const[visible,setVisible]=useState("show")

    const[shopkeeper,setShopkeeper]=useState({
        shop1:"Darshan",
        shop2:"Rovin",
        shop3:"Sathwik",


    })
  return (
    <>
   
    <div>
        {visible=="show" ? <> <center><table border="3"  >
            <tr>
                <th>name</th>
                <th> Paid</th>
                <th>Not paid</th>
                <th>status</th>
            </tr>
            <tr>
            
                <td><div className="i-right3">{shopkeeper.shop1 }</div></td>
                <td><button  onClick={()=>setPd1("Paid")}  >Paid</button></td>
                <td><button  onClick={()=>setPd2("Not paid")}  >not Paid</button></td>
                <td><div className="i-right1">{Pd1} </div><div className="i-right2">{Pd2}</div></td>
               
            </tr>

      








            <tr>
            
                <td><div className="i-right3">{shopkeeper.shop2 }</div></td>
                <td><button  onClick={()=>setPd3("Paid")}  >Paid</button></td>
                <td><button  onClick={()=>setPd4("Not paid")}  >not Paid</button></td>
                <td><div className="i-right1">{Pd3} </div><div className="i-right2">{Pd4}</div></td>
               
            </tr>




            <tr>
            
            <td><div className="i-right3">{shopkeeper.shop3 }</div></td>
            <td><button  onClick={()=>setPd5("Paid")}  >Paid</button></td>
            <td><button  onClick={()=>setPd6("Not paid")}  >not Paid</button></td>
            <td><div className="i-right1">{Pd5} </div><div className="i-right2">{Pd6}</div></td>
           
        </tr>
        </table></center>
     </>:""}
<br/><br/>


  <center>  <button onClick={()=>setVisible("show")}>Visible</button>
     <button onClick={()=>setVisible("invisible")}>Invisible</button></center> 
     
       
    </div>
    </>
  )
}
