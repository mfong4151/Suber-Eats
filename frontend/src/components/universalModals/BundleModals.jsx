import React, { useContext } from 'react';
import UserMenuModal from './UserMenuModal';
import LocationModal from './LocationModal';
import { UXContext } from '../UXContext';
import CartModal from './CartModal';
import RestCartModal from './RestCartModal';

// const [menuModal, setMenuModal ] = useState(false)
// const [cartModal, setCartModal] = useState(false);
// const [restCartModal, setRestCartModal] = useState(false);  


const BundleModals = () => {
    const {menuModal, cartModal, locationModal} = useContext(UXContext)


    return (
        <>
            {menuModal && <UserMenuModal/>}
            {locationModal && <LocationModal/>}
            {cartModal && <CartModal/>}
            {/* {restCartModal && <RestCartModal/>} */}
        </>
        )
}

export default BundleModals;