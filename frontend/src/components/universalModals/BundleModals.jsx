import React, { useContext, useEffect } from 'react';
import UserMenuModal from './UserMenuModal';
import LocationModal from './LocationModal';
import { UXContext } from '../UXContext';
import CartModal from './CartModal';
import RestCartModal from './RestCartModal';
import { useState } from 'react';
import { aggregateCart } from './utils/cartUtils';
import { fetchCart, getCart } from '../../store/cart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const BundleModals = ({userLocation}) => {
    const {menuModal, cartModal, locationModal, restCartModal} = useContext(UXContext)
    const [restCart, setRestCart] = useState('');

    const currentCart = useSelector(getCart);
    const sortedCarts = aggregateCart(currentCart);
    return (
        <>
            {menuModal && <UserMenuModal/>}
            {locationModal && <LocationModal userLocation={userLocation}/>}
            {cartModal && <CartModal setRestCart={setRestCart} sortedCarts={sortedCarts}/>}
            {restCartModal && <RestCartModal restCart={sortedCarts[restCart]}/>}
        </>
        )
}

export default BundleModals;