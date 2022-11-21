import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Textfield() {
  return (
    
    <Autocomplete
    id="country-select-demo"
    sx={{width:300}}
    options={countries}
    autoHighlight
    getOptionLabel={(option)=>option.label}
    renderOption={(props,option)=>(
        <Box component="li" sx={{ '$> img':{mr:2,flexShrink:0}}}{...props}>
        <img
        loading="lazy"
        width="28"
        src={`http://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
        srcSet={`http://flagcdn.com/w40/${option.code.toLowerCase()}.png`}
        alt=""
        />
        {option.label}({option.code})+{option.phone}
        </Box>
   )}
   renderInput={(params)=>(
    <TextField
    {...params}
    label="choose a country" 
    inputProps={{
        ...params.inputProps,autoComplete:'new-password'
    }}
    />
   )}
   />
  )
}
const countries=[
{code:'CH',label:'swizerland',phone:'41'},
{code:'IN',label:'india',phone:'91'},
{code:'US',label:'united states',phone:'1'},
{code:'RU',label:'russia',phone:'7'},
{code:'PK',label:'pakistan',phone:'92'},
{code:'ES',label:'spain',phone:'34'},

]