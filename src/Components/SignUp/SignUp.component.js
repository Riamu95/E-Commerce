import React from 'react';
import './SignUp.style.scss';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            displayName: '',
            email : '',
            password : '',
            confirmPassword: ''
        };
    }

     handleSubmit = async event =>
    {
        event.preventDefault();
        const { displayName , email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword)
        {
            alert("password don't match");
            return;
        }

        try {
            
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                 password
            ); 
            await createUserProfileDocument(user, {displayName})
            
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword: ''
            });
        }
        catch ( err ) {
            console.log(err);
        }     
    }

    handleChange = event =>
    {
       const {name, value} = event.target;
        this.setState({ [name] : value })
    }

    render()
    {
        return(
            <div className="sign-up">
            <h2 className='title'>Don't have an account?</h2>
            <span>Sign up with your name, email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text'
                    name ='displayName'
                    label="Display Name"
                    value = {this.state.displayName}
                    onChange={this.handleChange}
                    required
                    />

                <FormInput 
                    type='Email'
                    name ='email'
                    label="Email"
                    value = {this.state.email}
                    onChange={this.handleChange}
                    required
                    />

                <FormInput 
                    type='Password'
                    name ='password'
                    label="Password"
                    value = {this.state.password}
                    onChange={this.handleChange}
                    required
                    />
                 <FormInput 
                    type='Password'
                    name ='confirmPassword'
                    label="Confirm Password"
                    value = {this.state.confirmPassword}
                    onChange={this.handleChange}
                    required
                    />

                <Button children="Sign Up" type="submit" className={"custom-button"}/>

            </form>
            </div>
        );
    }
}

export default SignUp;