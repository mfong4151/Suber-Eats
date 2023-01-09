import React, { useContext } from 'react';
import UserMenuModal from './UserMenuModal';
import LocationModal from './LocationModal';
import { UXContext } from '../UXContext';
import CartModal from './CartModal';
import RestCartModal from './RestCartModal';
import { useState } from 'react';

const BundleModals = () => {
    const {menuModal, cartModal, locationModal, restCartModal} = useContext(UXContext)
    const [restCart, setRestCart] = useState('');

    return (
        <>
            {menuModal && <UserMenuModal/>}
            {locationModal && <LocationModal/>}
            {cartModal && <CartModal setRestCart={setRestCart}/>}
            {restCartModal && <RestCartModal restCart={restCart}/>}
        </>
        )
}

export default BundleModals;