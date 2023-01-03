// import SignupFormPage from "./components/SignupFormPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SplashPage from "./components/SplashPage"
import LoginFormPage from "./components/LoginFormPage";
import UserExperiencePage from "./components/UserExperiencePage"
import RestaurantListing from './components/RestaurantListingPage';

function App() {
  return (
    <>
          <Switch>
            <Route path="/" component={SplashPage} exact/>
            <Route path="/login" component={LoginFormPage}/>
            <Route path="/deliverypickup" component={UserExperiencePage}/>
            <Route path="/restaurantListing" component={RestaurantListing}/>
          </Switch>
    </>
  );
}

export default App;
