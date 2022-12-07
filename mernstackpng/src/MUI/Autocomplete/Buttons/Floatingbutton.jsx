import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
    
  return (
    <div>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="error" aria-label="add">
        <FavoriteIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" size="small">
       
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>

    <hr></hr>
    <Fab size="small" color="secondary" aria-label="add">
  <AddIcon />
</Fab>
<Fab size="medium" color="secondary" aria-label="add">
  <AddIcon />
</Fab>
<Fab color="secondary" aria-label="add">
  <AddIcon />
</Fab>
<hr></hr>
<Fab variant="extended" size="small" color="primary" aria-label="add">
  <NavigationIcon sx={{ mr: 1 }} />
  Extended
</Fab>
<Fab variant="extended" size="medium" color="primary" aria-label="add">
  <NavigationIcon sx={{ mr: 1 }} />
  Extended
</Fab>
<Fab variant="extended" color="primary" aria-label="add">
  <NavigationIcon sx={{ mr: 1 }} />
  Extended
</Fab>
</div>
    
  );
}