import React from "react";
import {  withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getItem } from "../../Redux/Shop/shop.selector";
import { addCartItem } from "../../Redux/Cart/cart-actions";
import Button from "../../Components/Button/Button.component";
import './ItemPage.styles.scss';

const ItemPage = ({addItem,match,item}) => 
{
   const { imageUrl, name, price, id} = item[0];

    return(
        <div className='item'>

            <div className="product">
                <img src={imageUrl}/>
                <span className='name'> {name}</span>
            </div>

            <div className='product-info'>
                <span className='price'>Price : ${price}</span>
            </div>
            
            <Button onClick={() => addItem({ id : id, name : name,  imageUrl : imageUrl, price : price})} inverted > Add Item </Button>    
        </div>
        
    );
};


const mapStateToProps = (state,ownProps) => ({
   
       item : getItem(ownProps.match.params.collectionId, Number(ownProps.match.params.itemId))(state)
});

const mapDispatchToProps = dispatch => ({
    addItem : (data) => dispatch(addCartItem(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemPage));