import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';
import { ReactComponent as Logo} from '../../Assets/crown.svg';


const Header = () => 
{
    return(
        <div className="Header">
            <Link clasName="logo-container" to="/">
                    <Logo clasName="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop"> SHOP </Link>
                <Link className="option" to="/contact"> CONTACT </Link>
                <Link className="option" to="/signIn"> SIGN IN </Link>
            </div>

        </div>
    );
}

export default Header;