import { useState } from 'react';
import FormInput from '../form-input/Form-input';
import CustomButton from '../Custom-button/Custom';

import './Sign-in.scss';

const SignIn =() =>{
  const [userCredentials, setCredentials] =useState({
    email:'',
    password:''
  });

  const {email,password} =userCredentials;

  const handleSubmit =async event => {
    event.preventDefault();

  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({...userCredentials, [name]: value });
  };

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type="button">
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

export default SignIn;