import styled from "styled-components";

export const ProductImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 75vh;
`;

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;

    @media screen and ( max-width : 800px)
    {
        width: 60vw;
    }
`;



export const ProductName = styled.span`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 15px;
    color: #4a4a4a;
`;



export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    
    @media screen and ( max-width : 800px)
    {
        width : 30vw;
    }
`;

export const ProductPrice = styled.span`
    font-size: 16px;
    margin-bottom: 25px;
    width: 100px;
    color: #4a4a4a;
`;

