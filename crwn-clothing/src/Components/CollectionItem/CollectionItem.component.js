import React from 'react';
import './CollectionItem.styles.scss'
import Button from '../Button/Button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../Redux/Cart/cart-actions';

const CollectionItem = ({addCartItem, imageUrl, name,price, id}) => 
{
    console.log(imageUrl, name,price,id);
    return(
     
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage : `url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={ () => addCartItem({ id : id, name : name,  imageUrl : imageUrl, price : price}) } inverted > Add to Cart </Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem : (data) => dispatch(addCartItem(data))
});

export default connect(null, mapDispatchToProps)(CollectionItem);