import styled from 'styled-components';

export const CollectionsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    
    @media screen and ( max-width: 800px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        padding-left : 2.5vw;
    }
`; 

export const CollectionItemContainer = styled.div`
    margin-bottom: 30px;
`;
