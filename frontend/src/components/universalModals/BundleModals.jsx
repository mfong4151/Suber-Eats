import React from 'react';
import UserMenuModal from './UserMenuModal';
import LocationModal from './LocationModal';
import CartModal from './CartModal';
import RestCartModal from './RestCartModal';
import { useState } from 'react';



const BundleModals = ({modalStates}) => {
    const {menuModal, locationModal, cartModal, restCartModal} = modalStates
    //used for driving the clicked on cart in cart modal to restCartModal
    const [activeCart, setActiveCart] = useState({})
    
    return (
        <>
            {menuModal && <UserMenuModal modalStates={modalStates}/>}
            {locationModal && <LocationModal modalStates={modalStates}/>}
            {cartModal && <CartModal modalStates={modalStates} activeCartState={{activeCart, setActiveCart}}/>}
            {restCartModal && <RestCartModal cart={activeCart} modalStates={modalStates}/>}
        </>
        )
}

export default BundleModals;