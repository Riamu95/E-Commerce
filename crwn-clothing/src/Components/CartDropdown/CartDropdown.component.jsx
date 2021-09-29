import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';
import { connect  } from 'react-redux';

const CartDropdown = ({items}) => 
{
    console.log('hii', items.name);
    return(
        <div className='cart-dropdown'>
           <div className='cart-items'/>
         <span> {items.name} </span>
         <span> {items.price} </span>
         <span> {items.name} </span>
            <Button> GO TO CHECKOUT </Button>
        </div>
    );
};

const mapStateToProps = ({cart: { cartItems }}) => ({
    items : cartItems
});

export default connect(mapStateToProps, null)(CartDropdown);