import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from "./button";
import { signout } from './actions/userActions';

function Navbar() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  console.log(userInfo);


  const signoutHandler = () => {
    dispatch(signout());
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            Pinnacle Life Challenge <i className='fas fa-feather-alt' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? "nav-menu active" : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
          </Link>
            </li>

            <li className='nav-item'>
              <Link
                to="/objectives"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Objectives
          </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/products"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Products
          </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/purchases"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Purchases
          </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/cart"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Cart {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/budgetsheet"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Budget Sheet
          </Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.username} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                    </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                  <Link to="/signin">Sign In</Link>
                )}

            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

<footer className="row center">All right reserved</footer>

export default Navbar;

