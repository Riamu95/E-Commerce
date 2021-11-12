import React from 'react';
import './MenuItem.styles.scss';
import { useHistory, useRouteMatch } from "react-router";
import styled from 'styled-components';


const MenuItem = ({ image, title, size, url }) => 
{
    const match = useRouteMatch();
    const history = useHistory();
    return (
         <div className = {`${size} menu-item`} onClick = { () => history.push(`/shop${match.url}${url}`) }>
        <div className='background-image' style = { { backgroundImage : `url(${image})` } }/>
            <div className = 'content'>
                <h1 className = 'title'> {title.toUpperCase()} </h1>
                <span className = 'subtitle'> SHOP NOW </span>
            </div>
        </div>
    );
};

export default MenuItem;