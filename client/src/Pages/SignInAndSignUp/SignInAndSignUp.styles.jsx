import styled  from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    display: flex;
    flex-direction : ${props => (props.width < 800 ? 'column' : 'row')};
    justify-content: space-between;
    width:  ${props => (props.width < 800 ? '100%' : '100%')};
    height : 70vh;
    margin: 30px;

    @media screen and ( max-width: 800px){
        width: 80vw;
        margin : auto;
    }
`;