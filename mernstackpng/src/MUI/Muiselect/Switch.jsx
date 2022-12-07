import * as React from 'react';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
 
export default function ControlledSwitches() {
   
   
  
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [checked1, setChecked1] = React.useState(false);

  const handleChange1= (event) => {
    setChecked1(event.target.checked);
  };

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange13 = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 1;



  return (
    <div>
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <h1>color</h1>
    <Switch {...label} defaultChecked />
<Switch {...label} defaultChecked color="secondary" />
<Switch {...label} defaultChecked color="warning" />
<Switch {...label} defaultChecked color="default" />
<GreenSwitch {...label} defaultChecked />
<h1>label</h1>
<FormGroup>
  <FormControlLabel control={<Switch defaultChecked />} label="Label" />
  <FormControlLabel disabled control={<Switch />} label="Disabled" />
</FormGroup>
<h1>size</h1>
<Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked />
      <h1>controlled</h1>
      <Box sx={{ display: 'flex' }}>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick any one name option</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Radio checked={gilad} onChange={handleChange13} name="gilad" />
            }
            label="Prajwal"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange13} name="jason" />
            }
            label="Sathwik"
          />
          <FormControlLabel
            control={
              <Switch checked={antoine} onChange={handleChange13} name="antoine" />
            }
            label="Darshan"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
     
    </div>

  );
}