import styled from "styled-components";

export const CheckoutPageContainer = styled.div`

    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px){
        width: 95vw;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

`;


export const HeaderBlockContainer = styled.div`

    text-transform: capitalize;

    @media screen and (max-width: 800px) {
        font-size : 12px;
    }
   
`;

export const TotalContainer = styled.div`

    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media screen and ( max-width: 800px ){
        font-size : 12px;
    }

`;

export const Test = styled.div`

    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;

    @media screen and ( max-width: 800px ){
        font-size : 12px;
}

`;

export const ButtonContainer = styled.div`

    margin-left: auto;
    margin-top: 25px;
    
`;