import { useState } from 'react';
import FormInput from '../form-input/Form-input';
import CustomButton from '../Custom-button/Custom';

import './sign-up.scss';

const SignUp=()=>{
  const [userCredentials, setUserCredentials]= useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const {  displayName, email,password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event ) => {
    const { name, value } = event.target;

    setUserCredentials({...userCredentials, [name]:value});
  };

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required handleChange={undefined}          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            const label='Email'
            required handleChange={undefined}          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required handleChange={undefined}          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required handleChange={undefined}          />
          <CustomButton >SIGN UP</CustomButton>
        </form>
      </div>
    );
  };

export default SignUp;