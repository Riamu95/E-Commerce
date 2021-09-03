import React from 'react';
import './Button.style.scss';

const Button = ({children, ...otherprops }) => 
{
    return (
            <button {...otherprops}> { children } </button>
    );
}

export default Button;