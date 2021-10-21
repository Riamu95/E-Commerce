import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, LogoContainer, Options, Option } from './Header.styles';
import { ReactComponent as Logo} from '../../Assets/crown.svg';
import  CartIcon from '../Cart-icon/Cart-icon.component';

import { connect } from 'react-redux';
import CartDropdownComponent from '../CartDropdown/CartDropdown.component';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors';
import { setCartHidden } from '../../Redux/Cart/cart-actions';
import { UserSignOutStart } from '../../Redux/User/user-actions';

const Header = ({currentUser, hidden,hideCart, SignOut}) => 
{
    const path =  useLocation().pathname;

    const onSignOutClick = () => 
    {
        console.log('ji');
        hideCart();
        SignOut();
    }; 

    return(
        
        <HeaderContainer>
            <LogoContainer to="/">
                    <Logo className="logo" />
            </LogoContainer>
           <Options>
                {
                    currentUser && path === '/shop' ? null :  <Option to="/shop"> SHOP </Option>
                }
                <Option to="/contact"> CONTACT </Option>
                {
                    currentUser ? <Option as='div' onClick={ () => onSignOutClick( )} to="/shop"> SIGN OUT </Option> : 
                    <Option to="/signIn"> SIGN IN </Option>
                }

                {
                    currentUser ?   
                    <CartIcon/> : null
                }

            </Options>
                {
                    hidden ?  null : <CartDropdownComponent/>
                }
       </HeaderContainer>
    );
}

const mapStateToProps = state => ({
    currentUser : selectCurrentUser(state),
    hidden : selectCartHidden(state)
});

const mapDispatchToProps = dispatch => ({
    hideCart :  () => dispatch(setCartHidden()),
    SignOut : () => dispatch(UserSignOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);