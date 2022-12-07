// import React,{useState} from 'react'

// export default function Employee() {
   
   
   
   
   
//     const[In1,setIn1]=useState("");
//     const[In2,setIn2]=useState("");
//     const[In3,setIn3]=useState("");

//     const[show,setShow]=useState("sathvik")
    

//     const[employee,setEmployee]=useState({
//         emp1:"prajwal",
//         emp2:"sathwik",
//         emp3:"darshan"

//     })
    
//   return (
//     <div>
//         {show =="sathvik" ? <> <table border="1">
//             <tr>
//                 <th>name</th>
//                 <th>In</th>
//                 <th>Out</th>
//                 <th>Status</th>
//             </tr>
//             <tr>
//                 <td>{employee.emp1}</td>
//                 <td><button onClick={()=>setIn1("In")}>In</button></td>
//                 <td><button onClick={()=>setIn1("Out")}>out</button></td>
//                 <td>{In1}</td>
//                 </tr>
//                 <tr>
//                 <td>{employee.emp2}</td>
//                 <td><button onClick={()=>setIn2("In")}>In</button></td>
//                 <td><button onClick={()=>setIn2("Out")}>out</button></td>
//                 <td>{In2}</td>
//                 </tr>
//                 <tr>
//                 <td>{employee.emp3}</td>
//                 <td><button onClick={()=>setIn3("In")}>In</button></td>
//                 <td><button onClick={()=>setIn3("Out")}>out</button></td>
//                 <td>{In3}</td>

//             </tr>
//         </table></>:""}
//         <button onClick={()=>setShow("hide")}>hide</button>
//         <button onClick={()=>setShow("sathvik")}>show</button>
       
//     </div>
//   )
// }





// import React,{useState} from 'react'

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Visibility from '@mui/icons-material/Visibility';
// import IconButton from '@mui/material/IconButton';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { styled } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';

// export default function BTask8() {
//     const [B1,setB1]=useState("");
//     const [B2,setB2]=useState(""); 
//     const [B3,setB3]=useState("");
//     const [B4,setB4]=useState("");
//     const [B5,setB5]=useState("");
//     const [show, setShow]=useState("")
//     const BootstrapButton = styled(Button)({
//         // boxShadow: 'none',
//         // textTransform: 'none',
//         // fontSize: 16,
//         // padding: '6px 12px',
//         // border: '1px solid',
//         // lineHeight: 1.5,
//         // backgroundColor: '#0063cc',
//         // borderColor: '#0063cc',
//         // fontFamily: [
//         //   '-apple-system',
//         //   'BlinkMacSystemFont',
//         //   '"Segoe UI"',
//         //   'Roboto',
//         //   '"Helvetica Neue"',
//         //   'Arial',
//         //   'sans-serif',
//         //   '"Apple Color Emoji"',
//         //   '"Segoe UI Emoji"',
//         //   '"Segoe UI Symbol"',
//         // ].join(','),
//         // '&:hover': {
//         //   backgroundColor: '#0069d9',
//         //   borderColor: '#0062cc',
//         //   boxShadow: 'none',
//         // },
//         // '&:active': {
//         //   boxShadow: 'none',
//         //   backgroundColor: '#0062cc',
//         //   borderColor: '#005cbf',
//         // },
//         // '&:focus': {
//         //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//         // },
//       });
//       const ColorButton = styled(Button)(({ theme }) => ({
//         // color: theme.palette.getContrastText(purple[500]),
//         // backgroundColor: purple[500],
//         // '&:hover': {
//         //   backgroundColor: purple[700],
//         // },
//       }));

//       const images = [
//         // {
//         //     url:'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ab1f4684-e87b-11e6-b405-8ddc00257689/4221809561/hd-camera-cakmakapps-screenshot.png',
//         //     title: 'Camera',
//         //     width: '30%',
//         //   },
//         ];

//         const ImageButton = styled(ButtonBase)(({ theme }) => ({
//             position: 'relative',
//             // height: 200,
//             // [theme.breakpoints.down('sm')]: {
//             //   width: '100% !important', // Overrides inline-style
//             //   height: 100,
//             // },
//             // '&:hover, &.Mui-focusVisible': {
//             //   zIndex: 1,
//             //   '& .MuiImageBackdrop-root': {
//             //     opacity: 0.15,
//             //   },
//             //   '& .MuiImageMarked-root': {
//             //     opacity: 0,
//             //   },
//             //   '& .MuiTypography-root': {
//             //     border: '4px solid currentColor',
//             //   },
//             // },
//           }));
          
//           const ImageSrc = styled('span')({
//             // position: 'absolute',
//             // left: 0,
//             // right: 0,
//             // top: 0,
//             // bottom: 0,
//             // backgroundSize: 'cover',
//             // backgroundPosition: 'center 40%',
//           });
          
//           const Image = styled('span')(({ theme }) => ({
//             // position: 'absolute',
//             // left: 0,
//             // right: 0,
//             // top: 0,
//             // bottom: 0,
//             // display: 'flex',
//             // alignItems: 'center',
//             // justifyContent: 'center',
//             // color: theme.palette.common.white,
//           }));
          
//           const ImageBackdrop = styled('span')(({ theme }) => ({
//             // position: 'absolute',
//             // left: 0,
//             // right: 0,
//             // top: 0,
//             // bottom: 0,
//             // backgroundColor: theme.palette.common.black,
//             // opacity: 0.4,
//             // transition: theme.transitions.create('opacity'),
//           }));
          
//           const ImageMarked = styled('span')(({ theme }) => ({
//             // height: 3,
//             // width: 18,
//             // backgroundColor: theme.palette.common.white,
//             // position: 'absolute',
//             // bottom: -2,
//             // left: 'calc(50% - 9px)',
//             // transition: theme.transitions.create('opacity'),
//           }));

//   return (
//     <div>
//         <br/><br/>
//         {/* <button   >show</button> */}
//         {/* <button style={{marginLeft:"20px" , m:"5"}}>hide</button> */}
//         <IconButton aria-label="Visibility"  onClick={()=>setShow("show")} style={{marginLeft:"20px" }}>
//             <Visibility/>
//       </IconButton>

//       <IconButton aria-label="VisibilityOff" onClick={()=>setShow("hide")}  style={{marginLeft:"20px" ,}}>
//             <VisibilityOff/>
//             </IconButton>

//         {show=="show" ? <>
//         <br/><br/>
//         <Stack spacing={2} direction="row">
//         <Button variant="contained" onClick={()=>setB1("this is basic button")}>Contained </Button>
//         <label>{B1}</label>
//         </Stack> <br/><br/>

//         <Stack direction="row" spacing={1}>
//         <Button variant="contained" color="success" onClick={()=>setB2("this is color button")}>
//         Success
//       </Button>
//       <label>{B2}</label>
//       </Stack><br/><br/>

//       <Stack spacing={2} direction="row">
//       <ColorButton variant="contained" onClick={()=>setB3("this is customization button")}>Custom CSS</ColorButton>
//       <BootstrapButton variant="contained" disableRipple onClick={()=>setB3("this is customization button")} >
//         Bootstrap
//       </BootstrapButton>
//       <label>{B3}</label>
//     </Stack> <br/><br/>

//     <Button variant="outlined"  onClick={()=>setB4("this is Outlined button")} >Primary</Button> 
//     <label>{B4}</label><br/><br/>

//     <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//       {images.map((image) => (
//         <ImageButton  
//           focusRipple
//           key={image.title}
          
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <label>{B4}</label>
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               // sx={{
//               //   position: 'relative',
//               //   p: 4,
//               //   pt: 2,
//               //   pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               // }}
//             >
//               {image.title}
              
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>

    
//        </>:""}
    
//     </div>
//   )
// }