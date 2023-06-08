
import { useEffect, useState } from 'react';
import { Stack, TextField, Button, Box } from '@mui/material';
import React from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    
    useEffect(()=>{
        async function hacerConsultaHTTP(params){
            await fetch("ww.google.com");
        }
        return () => {
            hacerConsultaHTTP();
        };
    }, [username])
    
    function usernameHandler(event) {
        console.log(event.target.value)
        setUsername(event.target.value)
    }
    function passwordHandler(event) {
        setPassword(event.target.value)
    }
    return (
        <Box className="App">
            <Stack spacing={4}>
                <h1>login</h1>
                <h3>usuario:{username}</h3>
                <h3>password:{password}</h3>
                <TextField id="outlined-basic" label="username" variant="outlined" onChange={usernameHandler} />
                <TextField id="outlined-basic2" label="password" variant="outlined" onChange={passwordHandler} />
                <Button variant="contained">login</Button>
            </Stack>
        </Box>
    );
}

export default Login;
