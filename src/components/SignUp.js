import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";   
import Loader from "./Loader";

import {Button, Col, Row, Label} from 'reactstrap';
//import styled from "styled-components";





const SubmitForm = ({ history, values, errors, touched, status }) => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setMembers(members => [...members, status]);
  }, [status]);
  return (
    <div className="member-form">
        <Row>
      <Form>
        <Loader />
        <h2>Sign Up Form</h2>
          <Col>
        <Label htmlFor="username">Username: </Label>
        <Field id="username" type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && 
          (<p className="errors">{errors.username}</p>)}

        </Col><Col>
        <Label htmlFor="email">Email: </Label>
        <Field id="email" type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p className="errors">{errors.email}</p>}
        
        </Col><Col>
        <Label htmlFor="password">Password: </Label>
        <Field id="password" type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="errors">{errors.password}</p>}
        
        </Col><Col>
        <Label htmlFor="passwordconfirm">Confirm Password: </Label>
        <Field id="passwordconfirm" type="password" name="passwordconfirm" placeholder="Confirm Password" />
        {touched.passwordconfirm && errors.passwordconfirm && <p className="errors">{errors.passwordconfirm}</p>}
        
        </Col>
        <br></br>
        <Button type="submit">Sign Up</Button>
        Already have an account? <Link to="/LogIn" className="navbar-brand">Log In</Link>
      
      </Form>

    </Row>
      
  </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, email, password, passwordconfirm }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      passwordconfirm: passwordconfirm || "",
      
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .required("Username is required.")
    .min(2,'Choose a longer name!')
    .max(50, 'Choose a shorter name!'),
    email: Yup.string()
    .required("Email is required.")
    .email('Email is not valid!'),
    password: Yup.string()
    .required("Password is required.")
    .min(4,'Choose a stronger password!')
    .max(30, 'Choose a shorter password!'),
    passwordconfirm: Yup.string()
    // .ofOne([Yup.ref('password'), null], "Password must match.")
     .required("Confirm password is required.")
     .test('passwords-match', "Password must match.", function(value) {
       return this.parent.password ===value;
     })
}),
  handleSubmit(values, { resetForm, setErrors, props }, ) {
    console.log("submitting", values);
    const user = {username:values.username,
      password:values.password,
      email:values.email}
      console.log(user);

    axios
      .post("https://dvst3-be.herokuapp.com/api/users/register", user)
      .then(res => {
        console.log("success", res.data);
        // setStatus(res.data);
        localStorage.setItem('token', res.data.token)
        resetForm();
        props.history.push("/Calculator");
      })
      .catch(err => console.log("Error:", err.response));
  
}
})(SubmitForm);
export default FormikSignUpForm;
