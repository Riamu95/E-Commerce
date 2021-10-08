import React from 'react';
import './CollectionItem.styles.scss'
import Button from '../Button/Button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../Redux/Cart/cart-actions';
import { withRouter } from 'react-router';
const CollectionItem = ({imageUrl, name,price, category, id, match,history}) => 
{  
    return( 
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage : `url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
          <Button onClick= {() =>  match.params?.collectionId ? history.push(`${match.url}/${id}`) :  history.push(`${match.url}/${category}/${id}`)} inverted > View Item </Button>     
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem : (data) => dispatch(addCartItem(data))
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));