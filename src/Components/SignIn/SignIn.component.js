import React from 'react';
import './SignIn.style.scss';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from "../Button/Button.component";
import { GoogleStartSignIn, EmailStartSignIn } from '../../Redux/User/user-actions';
import { connect } from 'react-redux';

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

    handleSubmit = async event =>
    {   
        event.preventDefault();
        const { email , password } = this.state;
        this.props.EmailSignIn({ email, password});
        this.setState({email : '', password : ''});
        /*
        try {
            await auth.signInWithEmailAndPassword(email,password);
           

        }
        catch (err) {
            	console.log(err);
        }
        */
        
    }

    handleChange = e =>
    {
        const { value, name } = e.target;
        this.setState({ [name] : value });
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
                        <CustomButton children ='Sign In' type="submit" isGoogleSignIn={null} onClick={ this.handleSubmit }/>
                        <CustomButton type='button' children ='Sign In With Google' isGoogleSignIn={true} onClick={ this.props.GoogleSignIn }/>
                     </div>
                </form>
           </div>
        );
    }
}

const mapDispatchToProps = dispatch => 
({
    GoogleSignIn :  () => dispatch(GoogleStartSignIn()),
    EmailSignIn :  (data) => dispatch(EmailStartSignIn(data))
});

export default connect(null, mapDispatchToProps)(SignIn);