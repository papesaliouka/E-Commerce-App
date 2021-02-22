import React, {Component} from 'react';

import {connect} from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSignInStart, googleSignInStart} from '../../redux/user-reducer/user.actions';

class SignIn extends Component {
  constructor() {
    super()
    this.state={
      email:'',
      password:''
    }
  }

  handleSubmit= async event => {
    event.preventDefault();
    const {emailSignInStart}= this.props;
    const {email, password} = this.state;
    emailSignInStart(email, password)
  }

  
  handleChange = (event) => {
      const{name, value} = event.target;
      this.setState({[name]: value})
    }

  render(){
    const {googleSignInStart} = this.props;
    return(
      <div className='sign-in'>
        <h2> I already have an account </h2>
        <span> Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" label='Email' value={this.state.email} required handleChange={this.handleChange}/>
          <FormInput type="password" name="password" label='Password' value={this.state.password} required handleChange={this.handleChange}/>
          <div className='buttons'>
            <CustomButton type="submit"> SIGN IN </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> {''} SIGN IN WITH GOOGLE {''} </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);