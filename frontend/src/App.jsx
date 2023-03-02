// import SignupFormPage from "./components/SignupFormPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SplashPage from "./components/SplashPage"
import LoginFormPage from "./components/LoginFormPage";
import UserExperiencePage from "./components/UserExperiencePage"
import RestaurantListing from './components/RestaurantListingPage';
import PastOrders from './components/PastOrders';
import { useState } from 'react';
import { UXContext } from './components/UXContext';
import CheckoutPage from './components/CheckoutPage';


function App() {
  
  
  const [menuModal, setMenuModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [restCartModal, setRestCartModal] = useState(false);
  
  const toggleMenuModal = () =>{ 
    setMenuModal(!menuModal)
  }    
  
  const toggleCartModal = ()=>{
    setCartModal(!cartModal)
  }
  
  const [locationModal, setLocationModal] = useState(false);
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

            <Route exact path="/login" component={LoginFormPage}/>
            <Route exact path="/deliverypickup" component={UserExperiencePage}/>
            <Route exact path="/restaurantListing/:restaurantId" component={RestaurantListing}/>
            <Route exact path="/checkout/:cartId" component={CheckoutPage}/>
            <Route exact path="/yourorders" component={PastOrders}/>
            <Route path="/" component={SplashPage} />
            <Route exact path="/" component={SplashPage} />

          </Switch>
    </>
  );
}

export default App;
