import React, { useContext } from 'react';
import UserMenuModal from './UserMenuModal';
import LocationModal from './LocationModal';
import { UXContext } from '../UXContext';

const BundleModals = () => {
    const {menuModal, cartModal, locationModal} = useContext(UXContext)
    
    return (
        <>
            {menuModal && <UserMenuModal/>}
            {locationModal && <LocationModal/>}
            {/* {cartModal && <CartModal/>} */}
        </>
        )
}

export default BundleModals;