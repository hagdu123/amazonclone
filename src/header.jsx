import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{basket,user}, dispatch] = useStateValue()

  const handleAuthentication=()=>{
    if(user){
        auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />
      </Link>

      {/* Search Bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Navigation Options */}
      <div className="header__nav">
        <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Guest</span>
          <span className="header__optionLineTwo">{user? 'sign out':'sign in'}</span>
        </div>
        </Link>

        <Link to='/orders'>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;


