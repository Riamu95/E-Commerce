import React from 'react';
import { withRouter, useHistory, useRouteMatch } from 'react-router';
import { ViewItemButton, CollectionItemContainer, CollectionImage, CollectionFooterContainer, ItemName, ItemPrice } from './CollectionItem.styles.jsx';

const CollectionItem = ({imageUrl, name,price, category, id}) => 
{  
    const history = useHistory();
    const match = useRouteMatch();
    
    return( 
        <CollectionItemContainer>
        <CollectionImage  imageUrl={imageUrl}/>
           <CollectionFooterContainer>
            <ItemName>{name}</ItemName>
                <ItemPrice>${price}</ItemPrice>
            </CollectionFooterContainer>
            <ViewItemButton width={50} onClick= {() =>  match.params?.collectionId ? history.push(`${match.url}/${id}`) :  history.push(`${match.url}/${category}/${id}`)} inverted > View Item </ViewItemButton>     
        </CollectionItemContainer>
    );
}
export default withRouter(CollectionItem);