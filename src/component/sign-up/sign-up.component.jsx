import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user-reducer/user.actions';


import './sign-up.styles.scss';

class SignUp extends Component {
  constructor() {
    super();
    this.state= {
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    const {signUpStart} = this.props
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
signUpStart({displayName, email,password})

}

  handleChange = event => {
    const {name, value} = event.target;
      this.setState({[name]: value});
    }


  render(){
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'> I do not have an account </h2>
        <span> Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit} >
          <FormInput
            label='Display Name' 
            onChange={this.handleChange} 
            name='displayName' 
            type='text' 
            value={displayName} 
            required 
            />
          <FormInput
            label='Email' 
            onChange={this.handleChange} 
            name='email' 
            type='email' 
            value={email} 
            required 
            />
          <FormInput  
            label='Password' 
            onChange={this.handleChange} 
            name='password' 
            type='password' 
            value={password} 
            required 
          />
          <FormInput  
            label='Confirm Password' 
            onChange={this.handleChange} 
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
}

const  mapDispatchToProps = dispatch => ({
  signUpStart: Credential => dispatch(signUpStart(Credential))
})

export default connect(null, mapDispatchToProps)(SignUp);