import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
// import styled from 'styled-components';

const SignUp = () => {
  const { handleSubmit, register, errors, watch } = useForm({});
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return(
    <div class='seeker-signup-container'>
      <h1>Domestic Violence Survivors Tool</h1>
      <h2>Survivor Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          ref={register({
            required: 'You must enter a username',
            minLength: {
            value: 6,
            message: 'Username must contain at least 6 characters'
            },
            maxLength: {
              value: 15,
              message: 'Username must contain 15 characters or less'
            }
          })}
        />
        <input
          type='text'
          name='full_name'
          placeholder='Name'
          ref={register({
            required: 'You must enter your Name',
            minLength: {
            value: 6,
            message: 'Name must contain at least 6 characters'
            },
            maxLength: {
              value: 40,
              message: 'Name must contain 40 characters or less'
            }
          })}
        />
        <input 
          name='seekers_email'
          placeholder='Email'
          type='email'
          ref={register({
            required: 'You must enter an Email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && errors.email.message}
        <input
          name='password'
          placeholder='Password'
          type='password'
          ref={register({
            required: 'You must enter a password',
            minLength: {
              value: 6,
              message: 'Password must have a least 6 characters'
            }
          })}
        />
        {errors.password && <p className='red'>{errors.password.message}</p>}

        <input 
          name='password_repeat'
          placeholder='Confirm Password'
          type='password'
          ref={register({
            validate: value =>
              value === password.current || 'The passwords do not match'
          })}
        />
        <input type='submit' onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};


export default SignUp;