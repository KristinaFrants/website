import React, {useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faStoreAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Landing from './Landing';



function Header() {
const [{ basket, user }, dispatch] = useStateValue();


const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
}

    return (
        
        <nav className="header bg-dark">

        {/* Sidebar */}
        {/* <Link to="sidebarMenu">
        <FontAwesomeIcon icon={faBars} className="sidebar ml-2"/>
        </Link> */}

<Link to="/home">
            <FontAwesomeIcon icon={faStoreAlt} className= "header__logo m-1"/>
            </Link>
            {/* Links */}
            <Link to="/landing">
            <div className="header__right ">Services</div>

            </Link>

            <div className="header__nav ">

                <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 
                    'Sing Out' : 'Sing In'}</span>
                </div>
                </Link>

                <Link to="/orders" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo 
                        header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>

            {/* Basket Icon */}
        
        </nav>
    )
}

export default Header
