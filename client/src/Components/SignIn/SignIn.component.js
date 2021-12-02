import React, { useState} from 'react';
import {SignInContainer , Title, ButtonContainer} from './SignIn.styles.jsx';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from "../Button/Button.component";
import { GoogleStartSignIn, EmailStartSignIn } from '../../Redux/User/user-actions';
import { useDispatch } from 'react-redux';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async event =>
    {   
        event.preventDefault();
        dispatch(EmailStartSignIn({ email, password}));
    };

    return(
       <SignInContainer>
            <h2>I Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput 
                    name='email' 
                    type='email' 
                    label='Email'  
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                
                <FormInput 
                    name='password' 
                    type='password' 
                    label='Password' 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    reqiured 
                />
                <ButtonContainer>
                    <CustomButton width={35}children ='Sign In' type="submit" isGoogleSignIn={null} onClick={ handleSubmit }/>
                    <CustomButton width={65} type='button' children ='Sign In With Google' isGoogleSignIn={true} onClick={() => dispatch(GoogleStartSignIn()) }/>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
}


export default SignIn;