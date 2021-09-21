import React from 'react';
import './SignUp.style.scss';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

class SignUp extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            name: '',
            email : '',
            password : ''
        };
    }

    handleSubmit = event =>
    {
        event.preventDefault();
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
            <h2>Dont have an account?</h2>
            <span>Sign up with your name, email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type='Name'
                    name ='name'
                    label="Name"
                    value = {this.state.name}
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

                <Button children="Sign Up" type="submit" className={"custom-button"}/>

            </form>
            </div>
        );
    }
}

export default SignUp;