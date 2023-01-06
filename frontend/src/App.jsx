// import SignupFormPage from "./components/SignupFormPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SplashPage from "./components/SplashPage"
import LoginFormPage from "./components/LoginFormPage";
import UserExperiencePage from "./components/UserExperiencePage"
import RestaurantListing from './components/RestaurantListingPage';
import { useState } from 'react';
import { UXContext } from './components/UXContext';
import { filters } from './components/utils/defaultFilters';

function App() {

  const [userLocation, setUserLocation] = useState('');
  const [numCarts, setNumCarts] = useState(0);
  const [sortOptions, setSortOptions] = useState(filters());
  const [menuModal, setMenuModal] = useState(false);
  const toggleMenuModal = () =>{ 
    setMenuModal(!menuModal)
  }    

 

  return (
    <>
          <Switch>
            <Route path="/" component={SplashPage} exact/>
            <Route path="/login" component={LoginFormPage}/>
            <UXContext.Provider value={{numCarts, setNumCarts, sortOptions, setSortOptions, 
                                menuModal, setMenuModal, toggleMenuModal}}>
              <Route path="/restaurantListing/:restaurantId" component={RestaurantListing}/>
              <Route path="/deliverypickup" component={UserExperiencePage}/>
            </UXContext.Provider>

            <Route path ="/" component={SplashPage}/>
          </Switch>
    </>
  );
}

export default App;
