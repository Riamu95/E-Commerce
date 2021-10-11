import styled from "styled-components";
import Button from "../Button/Button.component";



export const ViewItemButton = styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    &:hover {
        opacity: 0.85;
        display: flex;
    }
`;

export const CollectionImage = styled.div`
        background-image : url(${props => props.imageUrl});
        width: 100%;
        height: 95%;
        background-size: cover;
        background-position: center;
        margin-bottom: 5%;

        &:hover {
            opacity: 0.8;
        }
`;


export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover
    { 
        ${ViewItemButton} {
            opacity: 0.85;
            display: flex;
         }

         ${CollectionImage} {
             opacity:0.8;
         }
    }

`;

export const CollectioFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px; 
`;


export const ItemName = styled.span`
        width: 90%;   
        margin-bottom: 15px;
`;

export const ItemPrice = styled.span`
        width: 10%;
`;