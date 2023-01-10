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

const BundleModals = () => {
    const {menuModal, cartModal, locationModal, restCartModal} = useContext(UXContext)
    const [restCart, setRestCart] = useState('');

    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session.user.id)
    const currentCart = useSelector(getCart);
    const sortedCarts = aggregateCart(currentCart);

    // useEffect(()=>{
    //     dispatch(fetchCart(sessionUserId))

    // },[currentCart])

    return (
        <>
            {menuModal && <UserMenuModal/>}
            {locationModal && <LocationModal/>}
            {cartModal && <CartModal setRestCart={setRestCart} sortedCarts={sortedCarts}/>}
            {restCartModal && <RestCartModal restCart={sortedCarts[restCart]}/>}
        </>
        )
}

export default BundleModals;