import React from 'react';
import './SignIn&SignUp.style.scss';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';

const SignInAndSignUp = () => 
{
    return(
            <div className= "sign-in-and-sign-up">
                <SignIn/>
           </div>
    );
}

export default SignInAndSignUp;

