import React, { useContext } from 'react';
import UserMenuModal from './UserMenuModal';
import LocationModal from './LocationModal';
import { UXContext } from '../UXContext';
import CartModal from './CartModal';



const BundleModals = () => {
    const {menuModal, cartModal, locationModal} = useContext(UXContext)


    return (
        <>
            {menuModal && <UserMenuModal/>}
            {locationModal && <LocationModal/>}
            {cartModal && <CartModal/>}
            {/* refers to a particular restaurant */}

        </>
        )
}

export default BundleModals;