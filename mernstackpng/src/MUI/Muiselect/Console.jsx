import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import TextField from '@mui/material/TextField';



export default function Console() {
    const [value,setValue]=React.useState();
    const[button,setButton]=React.useState();
    const[radio,setRadio]=React.useState();
    const[check,setCheck]=React.useState();
    const[slide,setSlide]=React.useState();



    const handle=(e)=>{
        console.log(e.target.value)
    }

    const handle1=(e)=>{
        console.log("This is a simple basic button")
    }

    const handle2=(e)=>{
        console.log("Gender:",e.target.value)
    }
    const handle3=(e)=>{
        console.log("Label")
    }
    
    const handle4=(e)=>{
        console.log("Size",e.target.value)
    }
    // const handle5=(e)=>{
    //     console.log("Size2",e.target.value)
    // }
    
  return (
    <div>
        <h1>Text boxes</h1>
        <TextField id="outlined-basic" label="first name"   onChange={(e)=>{handle(e)}} variant="outlined" />
        <TextField id="outlined-basic" label="last name"   onChange={(e)=>{handle(e)}} variant="outlined" />

         <h1>Button</h1>
         <Stack direction="row" spacing={2}>
         <Button variant="contained"  onClick={handle1}  onChange={(e)=>{handle1(e)}} value={button} >Basic button</Button>
    </Stack>
    <h1>Radio Group</h1>
    <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female"   onClick={handle2}  onChange={(e)=>{handle2(e)}} value1={radio}/>
    <FormControlLabel value="male" control={<Radio />} label="Male"  onClick={handle2}  onChange={(e)=>{handle2(e)}} value1={radio} />
    <FormControlLabel value="other" control={<Radio />} label="Other"  onClick={handle2}  onChange={(e)=>{handle2(e)}} value1={radio}/>
  </RadioGroup>
</FormControl>
<h1>Checkbox</h1>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label"  onClick={handle3}  onChange={(e)=>{handle3(e)}} value={check}/>
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" onClick={handle3}  onChange={(e)=>{handle3(e)}} value={check}/>
</FormGroup>
<h1>Slider</h1>
<Box width={300}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default"   onClick={handle4} onChange={(e)=>{handle4(e)}}  valueLabelDisplay="auto" />
    
    </Box>

    </div>
  )
}
