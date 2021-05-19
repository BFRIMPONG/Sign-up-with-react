import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField, 
  Typography,
  Link,
} from "@material-ui/core";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import '../../App.css'


const Login = ({ handleChange }) => {
  const paperStyle = { 
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "tomato" };
  const textFieldStyle = {
    color: "tomato",
    fontColor: "tomato",
    borderColor: "tomato",
  };
  const checkboxStyle = { color: "tomato", borderColor: "white" };
  const buttonStyle = {
    color: "white",
    backgroundColor: "tomato",
    margin: "8px 0",
  };
  const linkStyle = { color: "tomato" };
  const initialValues = {
    email:'',
    password:'',
    remember: false,
  }
  const validationSchema = Yup.object().shape({
    email:Yup.string().email('please enter valid email').required('Required'),
    password:Yup.string().required('Required')
  }) 
  const onSubmit = (values, props) =>{
    console.log(values)
    setTimeout(()=>{
      props.resetForm()
      props.setSubmitting(false)
    }, 3000)
    
    console.log(props)
  }
  

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <HttpsOutlinedIcon />
          </Avatar>
          <h1>Sign in</h1>
        </Grid>

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => (
            <Form>
              
              <Field as = {TextField}
                style={textFieldStyle}
                label="Email"
                name = "email"
                placeholder="Enter email"
                fullWidth
                required
                helperText={<ErrorMessage name= "email" />}
              />
              <Field as = {TextField}
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
                fullWidth
                required
                helperText={<ErrorMessage name= "password" />}
              />

              <Field as = {FormControlLabel}
              name="remember"
                control={
                  <Checkbox
                    style={checkboxStyle}
                    name="checkedB"
                    color="custom"
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                variant="contained"
                style={buttonStyle}
                color="tomato"
                disabled={props.isSubmitting}
                fullWidth>{props.isSubmitting
                
              ?
                "Loading":"Sign in"}
              </Button>
              {console.log(props)}
            </Form>
          )}
        </Formik>
        <Typography>
          <Link style={linkStyle} href="#">
            Forgot password?
          </Link>
        </Typography>

        <Typography>
          Do you have an account?
          <Link
            style={linkStyle}
            href="#"
            onClick={() => handleChange("event", 1)}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
