import React from 'react';
import { SignInAndSignUpContainer } from './SignInAndSignUp.styles';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';
import Button from '../../Components/Button/Button.component';
import { useHistory } from 'react-router-dom';


const SignInAndSignUp = () => 
{
    const history = useHistory();

    const { innerWidth: width} = window;

    const onClick = () => 
    {
        history.push('/signup');
    };

    return(
           <SignInAndSignUpContainer width={width}>
                <SignIn/>
              {
                  width < 800 ? <Button onClick={() => onClick()}>Sign up here </Button> :  <SignUp/>
              } 
            </SignInAndSignUpContainer>
    );

     
}

export default SignInAndSignUp;

