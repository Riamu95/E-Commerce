import React from 'react';
import './Button.style.scss';

const Button = ({children, isGoogleSignIn,inverted, onClick }) => 
{
    return (
            <button  className = { `${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={onClick}> { children } </button>
    );
}

export default Button;