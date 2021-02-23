import React, { useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user-reducer/user.actions';


import './sign-up.styles.scss';

const SignUp = ({signUpStart} ) =>  {
  const [credential, setCredential] = useState({
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
  });
 
  const {displayName, email, password, confirmPassword} = credential
  
  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
  signUpStart({displayName, email,password})
}

  const handleChange = event => {
    const {name, value} = event.target;
      setCredential({[name]: value});
    }

    return(
      <div className='sign-up'>
        <h2 className='title'> I do not have an account </h2>
        <span> Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={handleSubmit} >
          <FormInput
            label='Display Name' 
            onChange={handleChange} 
            name='displayName' 
            type='text' 
            value={displayName} 
            required 
            />
          <FormInput
            label='Email' 
            onChange={handleChange} 
            name='email' 
            type='email' 
            value={email} 
            required 
            />
          <FormInput  
            label='Password' 
            onChange={handleChange} 
            name='password' 
            type='password' 
            value={password} 
            required 
          />
          <FormInput  
            label='Confirm Password' 
            onChange={handleChange} 
            name='confirmPassword' 
            type='password' 
            value={confirmPassword} 
            required 
          />
          <CustomButton type='submit'> SIGN UP </CustomButton>
      </form>
      </div>  
    );
  }


const  mapDispatchToProps = dispatch => ({
  signUpStart: Credential => dispatch(signUpStart(Credential))
})

export default connect(null, mapDispatchToProps)(SignUp);