import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 75vh;
`;


export const ProductName = styled.span`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;


export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductInfoContainer = styled.div`
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const ProductPrice = styled.span`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 16px;
    color: #4a4a4a;
`;

