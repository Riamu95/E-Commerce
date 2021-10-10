import React from 'react';
import './SignInAndSignUp.style.scss';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';

const SignInAndSignUp = () => 
{
    return(
            <div className = "sign-in-and-sign-up">
                <SignIn/>
                <SignUp/>
           </div>
    );
}

export default SignInAndSignUp;

