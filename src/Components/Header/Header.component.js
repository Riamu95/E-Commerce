import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, LogoContainer, Options, Option, LogoDiv } from './Header.styles';
import { ReactComponent as Logo} from '../../Assets/crown.svg';
import  CartIcon from '../Cart-icon/Cart-icon.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropdownComponent from '../CartDropdown/CartDropdown.component';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors';
import { setCartHidden } from '../../Redux/Cart/cart-actions';

const Header = ({currentUser, hidden,hideCart}) => 
{
    const path =  useLocation().pathname;

    const signOut = () => 
    {
        hideCart();
        auth.signOut();
    }

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
                    currentUser ? <Option as='div' onClick={() => signOut() } to="/shop"> SIGN OUT </Option> : 
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
    hideCart :  () => dispatch(setCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);