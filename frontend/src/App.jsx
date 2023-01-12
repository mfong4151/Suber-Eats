// import SignupFormPage from "./components/SignupFormPage";
import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom'
import SplashPage from "./components/SplashPage"
import LoginFormPage from "./components/LoginFormPage";
import UserExperiencePage from "./components/UserExperiencePage"
import RestaurantListing from './components/RestaurantListingPage';
import PastOrders from './components/PastOrders';
import { useState } from 'react';
import { UXContext } from './components/UXContext';
import { filters } from './components/utils/defaultFilters';
import CheckoutPage from './components/CheckoutPage';
import { useSelector } from 'react-redux';
import { fetchCart, getCart } from './store/cart';
import { checkCartMembership } from './components/RestaurantListingPage/utils/menuUtils';

function App() {
  
  
  const [userLocation, setUserLocation] = useState({lat: 37.747401957356246, lng: -122.4456108834198});
  const [numCarts, setNumCarts] = useState(0);
  const [sortOptions, setSortOptions] = useState(filters());
  const [menuModal, setMenuModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [restCartModal, setRestCartModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [checkoutOrder, setCheckoutOrder] = useState({})

  const toggleMenuModal = () =>{ 
    setMenuModal(!menuModal)
  }    
  
  const toggleCartModal = ()=>{
    setCartModal(!cartModal)
  }

  const toggleLocationModal = ()=>{
    setLocationModal(!locationModal)
  }

  const toggleCartModals= () =>{
    setCartModal(restCartModal)
    setRestCartModal(prev=> !prev)
  }

  const toggleRestCartModal = ()=>{
    setRestCartModal(prev => !prev)
  }



  return (
    <>
          <Switch>
            <Route path="/" component={SplashPage} exact/>
            <Route path="/login" component={LoginFormPage}/>
            <UXContext.Provider value={{numCarts, setNumCarts, sortOptions, setSortOptions, 
                                        menuModal, setMenuModal, toggleMenuModal,
                                        cartModal, setCartModal, toggleCartModal,
                                        locationModal, setLocationModal, toggleLocationModal,
                                        userLocation, setUserLocation, toggleRestCartModal,
                                        restCartModal, setRestCartModal, toggleCartModals,
                                        checkoutOrder, setCheckoutOrder
                                      }}>
              
              <Route path="/restaurantListing/:restaurantId" component={RestaurantListing}/>
              <Route path="/checkout" component={CheckoutPage}/>
              <Route path="/deliverypickup" component={UserExperiencePage}/>
              <Route path="/yourorders" component={PastOrders}/>
            </UXContext.Provider>

            <Route path ="/" component={SplashPage}/>
          </Switch>
    </>
  );
}

export default App;
