import React, { useState} from 'react';
import './SignIn.style.scss';
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
        <div className="sign-in">
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
                <div className="buttons">
                    <CustomButton children ='Sign In' type="submit" isGoogleSignIn={null} onClick={ handleSubmit }/>
                    <CustomButton type='button' children ='Sign In With Google' isGoogleSignIn={true} onClick={() => dispatch(GoogleStartSignIn()) }/>
                    </div>
            </form>
        </div>
    );
}


export default SignIn;