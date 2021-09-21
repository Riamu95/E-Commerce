import React from 'react';
import './Button.style.scss';

const Button = ({children, isGoogleSignIn, onClick }) => 
{
    return (
            <button  className = { `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={onClick}> { children } </button>
    );
}

export default Button;