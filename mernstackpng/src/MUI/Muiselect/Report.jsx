import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import React,{useState} from 'react'
import TextField from '@mui/material/TextField';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [state,setState]=useState({
            id:"",
            f:"",
            l:"",
            p:""
        })

        let count=0
            const [tbl,setTbl]=useState([])
            const [nt,setNt]=useState([])
            const handlesubmit1=(e)=>{
              setOpen(false)
                let temp={...state}
                setState({
                    f:"",
                    l:"",
                    p:"",
                  
                })
                tbl.push(temp)
                setNt(tbl)
            }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
   <br></br>
         <br></br>
         <br></br>
         <br></br>
         <TextField id="outlined-basic" label="first name"  name="f" placeholder='Name' onChange={(e)=>{handle(e)}} value={state?.f}/>
         <TextField id="outlined-basic" label="Email"  name="l" placeholder='Email' onChange={(e)=>{handle(e)}} value={state?.l}/>
         <TextField id="outlined-basic" label="Phone"  name="p" placeholder='Phone no' onChange={(e)=>{handle(e)}} value={state?.p}/><br></br>
         <br></br>


      <Button variant="contained" onClick={handleClickOpen}>
        Submit
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Do you want to insert values into a table
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button variant="text"  onClick={(e)=>{handlesubmit1(e)}}>Yes</Button>
          
        </DialogActions>
      </Dialog>
      <br></br>
      <br></br>
      <table border="2">
            <tr>
                <td>Id</td>          
                <td>Name</td>
                <td>Email</td>
                <td>Phoneno</td>

              
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
                    <td>
                        {item.p}
                    </td>
                </tr>
            })}
        </table>
    </div>
  );
}
