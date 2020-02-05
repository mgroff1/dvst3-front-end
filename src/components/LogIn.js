import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Loader from "./Loader";
import {Button, Col, Row, Label} from 'reactstrap';
import {Link} from "react-router-dom";
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
        <h2>Log In Form</h2>
          <Col>
        <Label htmlFor="username">Username: </Label>
        <Field id="username" type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && 
          (<p className="errors">{errors.username}</p>)}

        </Col><Col>
        <Label htmlFor="password">Password: </Label>
        <Field id="password" type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="errors">{errors.password}</p>}
        
        </Col>
        <br></br>
        <Button type="submit">Log In</Button>
        Don't have an account? <Link to="/SignUp" className="navbar-brand">Sign Up</Link>
      </Form>

    </Row>
  </div>
  );
};

const FormikLogInForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .required("Username is required."),
    password: Yup.string()
    .required("Password is required.")
}),
  handleSubmit(values, { resetForm, setErrors, setStatus, props }, ) {
    console.log("submitting", values);
   
    axios
      .post("https://dvst3-be.herokuapp.com/api/users/login", values)
      .then(res => {
        console.log("success", res.data);
        localStorage.setItem('token', res.data.token)
        setStatus(res.data);
        resetForm();
        props.history.push("/Calculator");
      })
      .catch(err => console.log("Error:", err.response));
  
}
})(SubmitForm);
export default FormikLogInForm;




// import React from 'react';
// import axios from 'axios';

// class Login extends React.Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     axios
//       .post('https://domestic-violence-build-week.herokuapp.com/login', this.state.credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload);
//         this.props.history.push('/protected')
//       })
//       .catch(err => console.log(err))
//   };

//   render() {
//     return (
//       <>
//         <h1>Welcome!</h1>
//         <div>
//           <form onSubmit={this.login}>
//             <input
//               type="text"
//               name="username"
//               value={this.state.credentials.username}
//               onChange={this.handleChange}
//             />
//             <input
//               type="password"
//               name="password"
//               value={this.state.credentials.password}
//               onChange={this.handleChange}
//             />
//             <button>Log in</button>
//           </form>
//         </div>
//       </>
//     );
//   }
// }

// export default Login;