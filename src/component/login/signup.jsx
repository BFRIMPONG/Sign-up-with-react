import { Grid, Paper, Avatar, Typography, TextField, Button} from "@material-ui/core";
import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Signup = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "0px auto" };
  const avatarStyle = { backgroundColor: "tomato" };
  const textFieldStyle = {};
  const buttonStyle = {color:"white", backgroundColor:"tomato"};
  const checkboxStyle={color:"tomato", borderColor:"white"}

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h1 style={{margin:0}}>Sign Up</h1>
          <Typography variant="caption" gutterBottom>
            Kindly, fill the form to create an account!
          </Typography>
        </Grid>

        <form>
        <TextField
            style={textFieldStyle}
            label="Name"
            placeholder="Enter Name"
            fullWidth
            required
          />
          <TextField
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
          <TextField
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
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
            label="I accept the terms and conditions"
          />
          <Button type="submit" variant="contained" style={buttonStyle} fullWidth>Sign up</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
