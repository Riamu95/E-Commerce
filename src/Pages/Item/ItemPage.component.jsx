import React from "react";
import {  withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getItem } from "../../Redux/Shop/shop.selector";
import { addCartItem } from "../../Redux/Cart/cart-actions";
import Button from "../../Components/Button/Button.component";
import ItemSize from "../../Components/ItemSize/ItemSize.component";
import './ItemPage.styles.scss';

class ItemPage extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            size : 'Medium',
            imageUrl : props.item[0].imageUrl,
            name: props.item[0].name,
            price : props.item[0].price,
            id : props.item[0].id
        };
    }

    onSizeChange = (event) => {
        this.setState({size : event.target.value});
    };

    render()
    {
        return(
            <div className='item'>

                <div className="product">
                    <img src={this.state.imageUrl} alt=''/>
                    <span className='name'>{this.state.name}</span>
                </div>

                <div className='product-info'>
                <ItemSize onChange={this.onSizeChange} />
                <span className='Quantity'>Quantity : </span>
                    <span className='price'>Price : ${this.state.price}</span>
                    <Button onClick={() => this.props.addItem({ id : this.state.id, name : this.state.name,  imageUrl : this.state.imageUrl, price : this.state.price, size : this.state.size})} inverted > Add Item </Button>   
                </div>
                
                
            </div>
        );
    }
};


const mapStateToProps = (state,ownProps) => ({
   
       item : getItem(ownProps.match.params.collectionId, Number(ownProps.match.params.itemId))(state)
});

const mapDispatchToProps = dispatch => ({
    addItem : (data) => dispatch(addCartItem(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemPage));