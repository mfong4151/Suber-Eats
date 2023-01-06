// import SignupFormPage from "./components/SignupFormPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SplashPage from "./components/SplashPage"
import LoginFormPage from "./components/LoginFormPage";
import UserExperiencePage from "./components/UserExperiencePage"
import RestaurantListing from './components/UserExperiencePage/RestaurantListingPage';

function App() {


  return (
    <>
          <Switch>
            <Route path="/" component={SplashPage} exact/>
            <Route path="/login" component={LoginFormPage}/>

            <Route path="/restaurantListing/:id" component={RestaurantListing}/>
            <Route path="/deliverypickup" component={UserExperiencePage}/>
            
            <Route path ="/" component={SplashPage}/>
          </Switch>
    </>
  );
}

export default App;
