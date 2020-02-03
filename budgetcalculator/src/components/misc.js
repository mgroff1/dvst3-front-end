

////////////////////////////////////////////////
/////login with quth ///////////////////////////
const Login = props => {
  const initialState = {
    credentials: {
      username: '',
      password: ''
    }
  }

  const [loginData, setLoginData] = useState(initialState);

  const handleChange = e => {
    setLoginData({
      credentials: {
        ...loginData.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', loginData.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/colors')
      })
      .catch(err => console.log(err));
  }


  ////////////////////////////////////////////
  ////////Private Route///////////////////////
  //////////////////////////////////////////////

  import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if (localStorage.getItem('token')) {
        return <Component {...props} />
      } else {
        return <Redirect to="/" />
      }}}
    />
  )
}

export default PrivateRoute;

///////////////////////////////////////////////////////////
////////////axios with auth/////////////////////////////////
/////////////////////////////////////////////////////////
import axios from 'axios';

export const axiosWithAuth = () => {
  const token  = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
      Authorization: token
    }
  });
};

