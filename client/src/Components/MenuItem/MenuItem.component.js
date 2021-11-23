import React from 'react';
import { MenuItemContainer, BackgroundImageContainer,
ContentContainer, ContentTitle, ContentSubtitle } from './MenuItem.styles';
import { useHistory, useRouteMatch } from "react-router";


const MenuItem = ({ image, title, size, url }) => 
{
    const match = useRouteMatch();
    const history = useHistory();

     return (
        <MenuItemContainer  size = {size}  onClick = { () => history.push(`/shop${match.url}${url}`) }>
            <BackgroundImageContainer 
            className='background-image'
            imageUrl={image}/>
            <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle> SHOP NOW </ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    );
};

export default MenuItem;