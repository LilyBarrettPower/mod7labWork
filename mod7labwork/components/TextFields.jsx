import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic1" label="Name:" variant="outlined" color='secondary' focused />
            <TextField id="outlined-basic2" label="Email:" variant="outlined" color='secondary' focused />
        </Box>
    );
}