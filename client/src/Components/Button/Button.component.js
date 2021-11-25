import React from 'react';
import { ButtonContainer } from './Button.styles';

const Button = ({children,width, ...props}) => 
{
    return (
            <ButtonContainer width={width} {...props}> { children } </ButtonContainer>
    );
}

export default Button;