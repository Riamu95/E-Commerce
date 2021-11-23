import styled  from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    display: flex;
    flex-direction : ${props => (props.width < 800 ? 'column' : 'row')};
    justify-content: space-between;
    width:  ${props => (props.width < 800 ? '350px' : '850px')};
    height : 70vh;
    margin: 30px;
`;