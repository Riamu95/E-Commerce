import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';
import { connect  } from 'react-redux';

const CartDropdown = ({items}) => 
{
    return(
        <div className='cart-dropdown'>
           <div className='cart-items'/>
         <span> {console.log('items', items)} </span>
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