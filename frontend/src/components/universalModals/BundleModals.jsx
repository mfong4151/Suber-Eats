import React, { useContext } from 'react';
import UserMenuModal from './UserMenuModal';
import LocationModal from './LocationModal';
import { UXContext } from '../UXContext';
import CartModal from './CartModal';
import RestCartModal from './RestCartModal';

// const [menuModal, setMenuModal ] = useState(false)
// const [locationModal, setLocationModal] = useState(false)
// const [cartModal, setCartModal] = useState(false);
// const [restCartModal, setRestCartModal] = useState(false);  


const BundleModals = ({modalStates}) => {
    const {menuModal, locationModal, cartModal, restCartModal} = modalStates


    return (
        <>
            {menuModal && <UserMenuModal modalStates={modalStates}/>}
            {locationModal && <LocationModal modalStates={modalStates}/>}
            {cartModal && <CartModal modalStates={modalStates}/>}
            {/* {restCartModal && <RestCartModal modalStates={modalStates}/>} */}
        </>
        )
}

export default BundleModals;