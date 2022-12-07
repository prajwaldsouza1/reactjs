// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // import Button from '@mui/material/Button';
// // import Avatar from '@mui/material/Avatar';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemAvatar from '@mui/material/ListItemAvatar';
// // import ListItemText from '@mui/material/ListItemText';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import Dialog from '@mui/material/Dialog';
// // import PersonIcon from '@mui/icons-material/Person';
// // import AddIcon from '@mui/icons-material/Add';
// // import Typography from '@mui/material/Typography';
// // import { blue } from '@mui/material/colors';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogActions from '@mui/material/DialogActions';
// // import Slide from '@mui/material/Slide';

// // const Transition = React.forwardRef(function Transition(props, ref) {
// //         return <Slide direction="up" ref={ref} {...props} />;
// //       });
      


// // const emails = ['username@gmail.com', 'user02@gmail.com'];

// // function SimpleDialog(props) {
// //   const { onClose, selectedValue, open } = props;

// //   const handleClose = () => {
// //     onClose(selectedValue);
// //   };

// //   const handleListItemClick = (value) => {
// //     onClose(value);
// //   };



// //   //alert
 


// //   return (
// //     <Dialog onClose={handleClose} open={open}>
// //       <DialogTitle>Set backup account</DialogTitle>
// //       <List sx={{ pt: 0 }}>
// //         {emails.map((email) => (
// //           <ListItem button onClick={() => handleListItemClick(email)} key={email}>
// //             <ListItemAvatar>
// //               <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
// //                 <PersonIcon />
// //               </Avatar>
// //             </ListItemAvatar>
// //             <ListItemText primary={email} />
// //           </ListItem>
// //         ))}

// //         <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
// //           <ListItemAvatar>
// //             <Avatar>
// //               <AddIcon />
// //             </Avatar>
// //           </ListItemAvatar>
// //           <ListItemText primary="Add account" />
// //         </ListItem>
// //         <ListItemText primary="" />
        
        
        
// //        <center><Button variant="contained" onClick={handleClose}>Close</Button></center> 
        
// //       </List>
// //     </Dialog>
// //   );
// // }

// // SimpleDialog.propTypes = {
// //   onClose: PropTypes.func.isRequired,
// //   open: PropTypes.bool.isRequired,
// //   selectedValue: PropTypes.string.isRequired,
// // };

// // export default function SimpleDialogDemo() {
// //   const [open, setOpen] = React.useState(false);
// //   const [open1, setOpen1] = React.useState(false);
// //   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = (value) => {
// //     setOpen1(false);
// //     setSelectedValue(value);
// //   };

// //   return (
// //     <div>
// //         <h1>Basic dialog</h1>
// //       <Typography variant="subtitle1" component="div">
// //         Selected: {selectedValue}
// //       </Typography>
// //       <br />
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         Open simple dialog
// //       </Button>
// //       <SimpleDialog
// //         selectedValue={selectedValue}
// //         open={open1}
// //         onClose={handleClose}
// //       />
// //       <h1>alerts</h1>
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         Open alert dialog
// //       </Button>
// //       <Dialog
// //         open={open}
// //         TransitionComponent={Transition}
// //         keepMounted
// //         onClose={handleClose}
// //         aria-describedby="alert-dialog-slide-description"
// //       >
// //         <DialogTitle id="alert-dialog-title">
// //           {"Use Google's location service?"}
// //         </DialogTitle>
// //         <DialogContent>
// //           <DialogContentText id="alert-dialog-description">
// //             Let Google help apps determine location. This means sending anonymous
// //             location data to Google, even when no apps are running.
// //           </DialogContentText>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose}>Disagree</Button>
// //           <Button onClick={handleClose} autoFocus>
// //             Agree
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //       <h1>Form dialogs</h1>
// //     </div>
// //   );
// // }




// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';


// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });
  

// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
      
//         <Dialog
//                 fullScreen

//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
            
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


//optional sizes
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('xs');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}