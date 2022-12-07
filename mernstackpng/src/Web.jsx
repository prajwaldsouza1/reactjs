import React,{useState} from 'react'
import './shop.css'
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export default function Shop() {
    

   

    const[visible1,setVisible1]=useState("show")
    const[visible2,setVisible2]=useState("show1")
    const[visible3,setVisible3]=useState("show2")
    

   
  return (
    <>
   
    <div>
    <div className="prajwal"><button onClick={()=>setVisible1("show")}>BUTTON</button></div><br/>
    <div className="prajwal"><button onClick={()=>setVisible1("invisible")}>CHECKBOX</button></div><br/>
    <div className="prajwal"><button onClick={()=>setVisible1("show1")}>RADIO GROUP</button></div><br/>
  <div className="prajwal">  <button onClick={()=>setVisible1("invisible")}>BUTTON GROUP</button></div> 
     
        {visible1=="show" ?  <><div><center><table border="3"  >
          
            <tr>
            
               
            <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
               
            </tr> 
        </table></center></div> 
     </>:
     <> <div><center> <Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked color="secondary" />
<Checkbox {...label} defaultChecked color="success" />
<Checkbox {...label} defaultChecked color="default" />
<Checkbox
  {...label}
  defaultChecked
  sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }}
/></center></div>
               </>}
     
<br/><br/>


 






     
        {visible1=="show1" ?  <><div><center><table border="3"  >
          
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
        </table></center></div> 
     </>:
     <> <div><center> <ButtonGroup variant="contained" aria-label="outlined primary button group">
     <Button>One</Button>
     <Button>Two</Button>
     <Button>Three</Button>
   </ButtonGroup>
</center></div>
               </>}
     
<br/><br/>
       
    </div>
    </>
  )
}