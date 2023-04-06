import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import splashRamen from './assets/splash-ramen.png';
import '../SplashPage.css';

interface SplashBodySearchProps {}

const SplashBodySearch: FC<SplashBodySearchProps> = () => {
  return (
    <div id="search-component">
      <img id="ramen" src={splashRamen} alt="ramen" />

      <div id="splash-main" className="univ-padding">
        <h1 id="order-food-banner">Order Food to Your Door</h1>

        <p>
          <NavLink to={'/login'} id="sign-in">
            Sign in
          </NavLink>{' '}
          for your recent addresses
        </p>
      </div>
    </div>
  );
};

export default SplashBodySearch;
