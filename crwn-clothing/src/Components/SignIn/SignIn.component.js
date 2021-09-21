import React from 'react';
import './SignIn.style.scss';
import FormInput from '../FormInput/FormInput.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from "../Button/Button.component";

class SignIn extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            email : '',
            password : ''
        };
    }

    handleSubmit = event =>
    {
        event.preventDefault();
        this.setState({email : '', password : ''});
    }

    handleChange = e =>
    {
        const { value, name } = e.target;
        this.setState({ [name] : value }, console.log(this.state.email));
    }

    render()
    {
        return(
            <div className="sign-in">
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email'  
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password' 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        reqiured 
                    />
                    <div className="buttons">
                        <CustomButton children ='Sign In' type="submit" isGoogleSignIn={null} onClick={this.handleSubmit}/>
                        <CustomButton children ='Sign In With Google' isGoogleSignIn={true} onClick={ SignInWithGoogle }/>
                     </div>
                </form>
           </div>
        );
    }
}

export default SignIn;