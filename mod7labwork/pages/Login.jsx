import { useLoginInput } from "../hooks/useLoginInput"
// import the custom hook for the login form 
import { useState } from "react"

import { useNavigate } from "react-router-dom";
// import useNavigate so i can have a go back button

// import TextFields from "../components/TextFields";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    const navigate = useNavigate();
    // create a useNavigate
    const [status, setStatus] = useState('');
    // create a useState

    const [nameInputProps, resetName] = useLoginInput('Jane Doe');
    // implement the custom hook for name
    const [emailInputProps, resetEmail] = useLoginInput('example@gmail.com');
    // implement the custom hook for email

    function handleLogin() {
        resetName();
        resetEmail();
        setStatus('Successful login!')
    }
    // a function to reset the input values 

    return (
        <>
            <div>
                <Button onClick={() => navigate(-1)} variant="outlined">Go back!</Button> 
                {/* button to go back to the previous page */}
            </div>
            {/* Using MUI for the text fields */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic1" label="Name:" variant="outlined" color='secondary' focused {...nameInputProps}>
                </TextField>
                <TextField id="outlined-basic2" label="Email:" variant="outlined" color='secondary' focused {...emailInputProps} >
                </TextField>
            </Box>
            {/* <TextFields/> */}
            {/* <label>Name:
                <input {...nameInputProps} /> */}
                {/* apply the properties from the nameInputProps object into the input field */}
            {/* </label>
            <label>Email:
                <input {...emailInputProps} />
            </label> */}
            <Button onClick={handleLogin} variant="outlined">Login!</Button>
            {/* create a button that when clicked, calls the handleLogin function to reset the input fields */}
            <div> {status} </div>
            {/* create a div to display the success message when logged in */}


        </>
    );
}

export default Login;
