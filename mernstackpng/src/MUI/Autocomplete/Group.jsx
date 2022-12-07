import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Grouped() {
  const options = top100Films.map((option) => {
    console.log( option.title[0].toUpperCase())
    console.log( option.title[1].toUpperCase())
    console.log( option.title[2].toUpperCase())
    console.log( option.title[3].toUpperCase())
    console.log( option.title[4].toUpperCase())
    console.log( option.title[5].toUpperCase())
    console.log( option.title[6].toUpperCase())
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="With categories" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'prajwal', year: 1994 },
  
];