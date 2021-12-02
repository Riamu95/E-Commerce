import styled, {css} from "styled-components";

const buttonStyles =css`

    background-color: black;
    color: white;
    border: none;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
}
`;

const invertedStyles = css`

      background-color: white;
      color: black;
      border: 1px solid black;
    
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`;

const googleSignInStyles = css`
 
    background-color: #4285f4;
    color: white;

    &:hover {
    background-color: #357ae8;
    color: white;
    } 
`;

const getButtonStyles = props => {

    if(props.isGoogleSignIn)
        return googleSignInStyles


    return props.invertedStyles ? invertedStyles : buttonStyles;
};

export const ButtonContainer = styled.button`

    width : ${({width}) => (`${width}%`)};
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 25px 0 25px;
    font-size: 15px;
   
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
   
    cursor: pointer;
    display: flex;
    justify-content: center;

   

    ${getButtonStyles}

    
    @media screen and ( max-width: 800px ) {
        font-size: 12px;
        padding : 0 10px 0 10px; 
    }
`;