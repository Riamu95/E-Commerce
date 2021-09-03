import React from 'react';
import './SignUp.style.scss';


class SignUp extends React.Component
{
    constructor()
    {
        super();
        this.state = {

        };
    }

    render()
    {
        return(
            <div className="signUp">
                <label> Don't have an account? Sign Up! </label>
                <label for='name'>Name : </label>
                <input id='name' type='text' value=''/>
                <label for="signUpEmail">Email : </label>
                <input id="signUpEmail" type='email' value=''/>
                <label for="signUpPassword">Password : </label>
                <input id="signUpPassword" type='passord' value=''/>
            </div>
        );
    }
}

export default SignUp;