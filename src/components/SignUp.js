import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";   

import {Button, Col, Row, Label} from 'reactstrap';
//import styled from "styled-components";





const SubmitForm = ({ values, errors, touched, status }) => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setMembers(members => [...members, status]);
  }, [status]);
  return (
    <div className="member-form">
        <Row>
      <Form>
        <h2>Sign Up Form</h2>
          <Col>
        <Label htmlFor="name">Username: </Label>
        <Field id="name" type="text" name="username" placeholder="Name" />
        {touched.name && errors.name && 
          (<p className="errors">{errors.name})</p>)}

        </Col><Col>
        <Label htmlFor="email">Email: </Label>
        <Field id="email" type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p className="errors">{errors.email}</p>}
        
        </Col><Col>
        <Label htmlFor="password">Password: </Label>
        <Field id="password" type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="errors">{errors.password}</p>}
        
        </Col><Col>
        <Label htmlFor="password">Confirm Password: </Label>
        <Field id="password" type="password" name="passwordconfirm" placeholder="Confirm Password" />
        {touched.password1 && errors.password1 && <p className="errors">{errors.password1}</p>}
        
        </Col>
        <br></br>
        <Button type="submit">Submit</Button>
      
      </Form>

      {/* delete for backend log in authenticate goes here?*/}
</Row>
      {members.map(member => (
        <ul key={member.id}>
          <li>Username: {member.name}</li>
          <li>Email: {member.email}</li>
          <li>Password: {member.password}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, email, password, password1 }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      passwordconfirm: password1 || "",
      
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .required("Name is required.")
    .min(2,'Choose a longer name!')
    .max(50, 'Choose a shorter name!'),
    email: Yup.string()
    .required("Email is required.")
    .email('Email is not valid!'),
    password: Yup.string()
    .required("Password is required.")
    .min(6,'Choose a stronger password!')
    .max(30, 'Choose a shorter password!'),
    // passwordconfirm: Yup.string()
    // .matches(password, "Password must match.")
}),
  handleSubmit(values, { resetForm, setErrors, setStatus }, ) {
    console.log("submitting", values);
    const user = {username:values.username,
      password:values.password,
      email:values.email}
      console.log(user);
    // change to filter through logins
    if (values.email === "tester@test.com") {
        setErrors({ email: "That email is already taken" });
    }else{
    axios
      .post("https://dvst3-be.herokuapp.com/api/users/register", user)
      .then(res => {
        console.log("success", res.data);
        // setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log("Error:", err.response));
  }
}
})(SubmitForm);
export default FormikSignUpForm;
