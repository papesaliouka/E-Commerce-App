import React, {useState} from 'react';

import {connect} from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSignInStart, googleSignInStart} from '../../redux/user-reducer/user.actions';

const SignIn = ({googleSignInStart, emailSignInStart}) => {
  const [credential, setcredential] = useState({email: '', password: ''})
    const {email, password} = credential;

  const handleSubmit= async event => {
      event.preventDefault();
      emailSignInStart(email, password)
  }
  const handleChange = (event) => {
        const{name, value} = event.target;
        setcredential({...credential, [name]: value})
  }
    return(
      <div className='sign-in'>
        <h2> I already have an account </h2>
        <span> Sign in with your email and password </span>

        <form onSubmit={handleSubmit}>
          <FormInput type="email" name="email" label='Email' value={email} required handleChange={handleChange}/>
          <FormInput type="password" name="password" label='Password' value={password} required handleChange={handleChange}/>
          <div className='buttons'>
            <CustomButton type="submit"> SIGN IN </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> {''} SIGN IN WITH GOOGLE {''} </CustomButton>
          </div>
        </form>
      </div>
    );
  }



const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);