import React , { useEffect ,useState} from  'react';
import { SignInAndSignUpContainer } from './SignInAndSignUp.styles';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';
import Button from '../../Components/Button/Button.component';
import { useHistory } from 'react-router-dom';


const SignInAndSignUp = () => 
{
    const history = useHistory();

    const { innerWidth: width} = window;
    const [ size, setSize] = useState(window.innerWidth);
    const [ mobile, setmobile] = useState(false);

    const onClick = () => 
    {
        history.push('/signup');
    };

    useEffect(() => {
        if(size < 800)
        {
            setSize(window.innerWidth);
            setmobile(true);
            console.log(' Mobile');
        }
            
    }, [size]);

    return(
           <SignInAndSignUpContainer className="SignInAndSignUp" width={width}>
                <SignIn className="SignIn"/>
              {
                  mobile ?  <Button onClick={() => onClick()}> Sign up here </Button> :  <SignUp className="SignUp"/>
              } 
            </SignInAndSignUpContainer>
    );

     
}

export default SignInAndSignUp;

