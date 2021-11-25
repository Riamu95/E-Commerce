import styled from "styled-components";

export const ItemContainer = styled.div`
   
    width: 100%;
    height: 66vh;

    display: flex;
    flex-direction : column;
    align-items : center;
`;

export const ProductImage = styled.div`
    
    width: 35%;
    height : 70%;
    margin-left : 25%;
    margin-right : 25%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
   

    @media screen and ( max-width: 800px ) {
        width: 66%;
        heigth: 60%;
    }
`;

export const ProductForm = styled.form`
    
    height: 30%;
    width :100%;
    
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    align-items : center;



    @media screen and ( max-width : 800px) {
        height : 40%;
    }
`;


export const ProductName = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #4a4a4a;
`;


export const ProductPrice = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #4a4a4a;
`;

