import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';
import { ReactComponent as Logo} from '../../Assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => 
{
    return(
        <div className="Header">
            <Link e="logo-container" to="/">
                    <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop"> SHOP </Link>
                <Link className="option" to="/contact"> CONTACT </Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()} to="/shop"> SIGN OUT </div> : 
                    <Link className="option" to="/signIn"> SIGN IN </Link>
                }
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);