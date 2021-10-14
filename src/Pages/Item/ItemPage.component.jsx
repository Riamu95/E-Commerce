import React from "react";
import {  withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getItem } from "../../Redux/Shop/shop.selector";
import { addCartItem } from "../../Redux/Cart/cart-actions";
import Button from "../../Components/Button/Button.component";
import ItemSize from "../../Components/ItemSize/ItemSize.component";
import { selectCurrentUser } from "../../Redux/User/user.selector";
import { ItemContainer, ProductName, ProductInfoContainer, ProductPrice, Product, AddItemFail } from './ItemPage.styles.jsx';

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
            id : props.item[0].id,
            user : props.currentUser,
        };
    }

    onSizeChange = (event) => {
        this.setState({size : event.target.value});
    };

    addItem = () => {
        this.state.user ? 
            this.props.addItem({ id : this.state.id, name : this.state.name,  imageUrl : this.state.imageUrl, price : this.state.price, size : this.state.size})
        :
            this.props.history.push('/signin'); 
    }

    render()
    {
        console.log(this.state.item);
        return(
            <ItemContainer>
                <Product>
                    <img src={this.state.imageUrl} alt=''/>
                    <span className='name'>{this.state.name}</span>
                </Product>

                <ProductInfoContainer>
                <ItemSize onChange={this.onSizeChange} />
                <span className='Quantity'>Quantity : </span>
                    <ProductPrice>Price : ${this.state.price}</ProductPrice>
                    <Button onClick={() => this.addItem() } inverted > Add Item </Button>
                </ProductInfoContainer>
            </ItemContainer>
        );
    }
};


const mapStateToProps = (state,ownProps) => ({
   
       item : getItem(ownProps.match.params.collectionId, Number(ownProps.match.params.itemId))(state),
       currentUser : selectCurrentUser(state), 
});

const mapDispatchToProps = dispatch => ({
    addItem : (data) => dispatch(addCartItem(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemPage));