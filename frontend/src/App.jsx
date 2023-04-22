// import SignupFormPage from "./components/SignupFormPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SplashPage from "./components/SplashPage"
import LoginFormPage from "./components/LoginFormPage";
import UserExperiencePage from "./components/UserExperiencePage"
import RestaurantListing from './components/RestaurantListingPage';
import PastOrders from './components/PastOrdersPage';
import CheckoutPage from './components/CheckoutPage';


const App = ()=> {
  
  
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
