import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchCart } from '../../store/cart';
import { fetchRestaurants } from '../../store/restaurant';
import { fetchLocations } from '../../store/location';
import BundleModals from '../universalModals/BundleModals';
import UXHeader from '../UXHeader';
import UXView from './UXView';
import Footer from '../generalDesignComponents/Footer';

interface ModalStates {
  menuModal: boolean;
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  locationModal: boolean;
  setLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  restCartModal: boolean;
  setRestCartModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserExperiencePage: React.FC = () => {
  const [menuModal, setMenuModal ] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [restCartModal, setRestCartModal] = useState(false); 
  const modalStates: ModalStates = {menuModal, setMenuModal, locationModal, setLocationModal, cartModal, setCartModal, restCartModal, setRestCartModal};
  const sessionUser = useSelector((state: any) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchRestaurants());
    if (sessionUser) {
      dispatch(fetchCart(sessionUser.id));
    }
  }, [dispatch, sessionUser]);

  if (!sessionUser) {
    return <Redirect to='/login' />;
  }

  return (
    <>  
      <UXHeader modalStates={modalStates} />
      <UXView />
      <Footer />
      <BundleModals modalStates={modalStates} />        
    </>
  );
};

export default UserExperiencePage;
