import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';




export default function BasicAlerts() {
    const [open, setOpen] = React.useState(true);

  return (
    <div>
        <h1>basic alerts</h1>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
    <h1>Description</h1>
    <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
</Alert>
<Alert severity="warning">
  <AlertTitle>Warning</AlertTitle>
  This is a warning alert — <strong>check it out!</strong>
</Alert>
<Alert severity="info">
  <AlertTitle>Info</AlertTitle>
  This is an info alert — <strong>check it out!</strong>
</Alert>
<Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
</Alert>
<h1>Actions</h1>
<Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
<Alert
  action={
    <Button color="inherit" size="small">
      UNDO
    </Button>
  }
>
  This is a success alert — check it out!
</Alert>
<h1>Transition</h1>
<Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
    <h1>Variants</h1>
    <Alert variant="outlined" severity="error">
  This is an error alert — check it out!
</Alert>
<Alert variant="outlined" severity="warning">
  This is a warning alert — check it out!
</Alert>
<Alert variant="outlined" severity="info">
  This is an info alert — check it out!
</Alert>
<Alert variant="outlined" severity="success">
  This is a success alert — check it out!
</Alert>
<h1>Filled</h1>
<Alert variant="filled" severity="error">
  This is an error alert — check it out!
</Alert>
<Alert variant="filled" severity="warning">
  This is a warning alert — check it out!
</Alert>
<Alert variant="filled" severity="info">
  This is an info alert — check it out!
</Alert>
<Alert variant="filled" severity="success">
  This is a success alert — check it out!
</Alert>
    </div>
  );
}