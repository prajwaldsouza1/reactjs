import React,{useState} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Example() {
    const [state1,setState1]=useState("false");
    const [state2,setState2]=useState("false");
    const [state3,setState3]=useState("false");

    const handle1=()=>{
        setState1("true");
        setState2("false");

    }
    const handle2=()=>{
        setState1("false");
        setState2("true");

    }
   
  return (
    <div>
        
        <button onClick={handle1}>Basic button</button>
        <button onClick={handle2}>colour button</button>
        

        {state1=="true"?<><Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
     
      
    </Stack>
    </>:state2=="true"?<> 
    <Button color="secondary">Secondary</Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button></>:""}
    </div>
  )
}


//if and else condition
// {state1=="true"?<>code</>:state2=="true"?<>code</>:""}