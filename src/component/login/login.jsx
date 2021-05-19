import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login = ({handleChange}) =>{

    const paperStyle={padding: 20, height: '70vh', width: 300, margin:"0px auto"}
    const avatarStyle={backgroundColor:"tomato"}
    const textFieldStyle={color:"tomato", fontColor:"tomato", borderColor:"tomato"}
    const checkboxStyle={color:"tomato", borderColor:"white"}
    const buttonStyle={color:"white", backgroundColor:"tomato", margin:"8px 0" }
    const linkStyle={color:"tomato"}
    return (
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <HttpsOutlinedIcon />
            </Avatar>
            <h1>Sign in</h1>
          </Grid>
          <form >
          <TextField style={textFieldStyle}
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter password"
            fullWidth
            required
          />
          
          <FormControlLabel
            control={
              <Checkbox style={checkboxStyle}
              
                name="checkedB"
                color="custom"
              />
            }
            label="Remember me"
          />
          <Button type='submit' variant="contained" style={buttonStyle} color="tomato" fullWidth>Sign in</Button>
          <Typography>
            <Link style={linkStyle} href="#">
                Forgot password?
            </Link>
          </Typography>

          <Typography>
              Do you have an account?
            <Link style={linkStyle} href="#" onClick={()=>handleChange("event",1)}>
                Sign Up
            </Link>
          </Typography>
          </form>
          
        </Paper>
      </Grid>
    );
}

export default Login;