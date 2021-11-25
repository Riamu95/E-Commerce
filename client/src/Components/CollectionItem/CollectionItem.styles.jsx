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

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
      }
`;

export const CollectionImage = styled.div`
        background-image : url(${props => props.imageUrl});
        width: 100%;
        height: 100%;
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

    @media screen and ( max-width : 800px){
        width : 40vw;
        &:hover
         { 
            ${ViewItemButton} {
                opacity: unset;

            }

            ${CollectionImage} {
                opacity: unset;
            }
        }
    }
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between; 
`;


export const ItemName = styled.span`
        width: 80%;   
        margin-bottom: 15px;

        @media screen and (max-width: 800px)
        {
            font-size: 3vw;
        }
`;

export const ItemPrice = styled.span`
        width: 20%;
        
        @media screen and (max-width: 800px)
        {
            font-size: 4vw;
        }
`;