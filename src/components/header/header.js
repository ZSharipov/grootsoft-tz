import React from "react";
import './header.css'

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.png" alt="logo" />
      <nav className="nav-header">
        <ul className='ul-nav'>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About{"\u00a0"}Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className='ul-nav'>
          <li>
            <a href="#">Forum</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Referral</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="icon-panel-header">
        <a className="search-icon fal fa-search" href="#"></a>
        <a className="heart-icon fal fa-heart" href="#"></a>
        <a className="bag-icon fal fa-shopping-bag" href="#"></a>
      </div>
    </header>
  );
}
