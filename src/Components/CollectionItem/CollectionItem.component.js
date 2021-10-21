import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../Redux/Cart/cart-actions';
import { withRouter } from 'react-router';
import { ViewItemButton, CollectionItemContainer, CollectionImage, CollectioFooterContainer, ItemName, ItemPrice } from './CollectionItem.styles.jsx';

const CollectionItem = ({imageUrl, name,price, category, id, match,history}) => 
{  
    return( 
        <CollectionItemContainer>
        <CollectionImage  imageUrl={imageUrl}/>
           <CollectioFooterContainer>
            <ItemName>{name}</ItemName>
                <ItemPrice>${price}</ItemPrice>
            </CollectioFooterContainer>
            <ViewItemButton onClick= {() =>  match.params?.collectionId ? history.push(`${match.url}/${id}`) :  history.push(`${match.url}/${category}/${id}`)} inverted > View Item </ViewItemButton>     
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem : (data) => dispatch(addCartItem(data))
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));