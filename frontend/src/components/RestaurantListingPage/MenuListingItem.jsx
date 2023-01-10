import React, { useEffect, useState } from 'react'
import './RestaurantListingPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { createCart, updateCart, fetchCart, deleteCart} from '../../store/cart'

const MenuListingItem = ({setMenuItem, listing, toggleItemModal}) => {
    //We need to refactor this to format a certain way based on whats avalible, 
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session.user.id)
    const [cartQuantity, setCartQuantity] = useState(0)
    const [prevQuantity, setPrevQuantity] = useState(0)

    const currentCart = () =>(
        {   menuItemId: listing.id,
            restaurantId: listing.menuId,
            userId: sessionUserId,
            quantity: cartQuantity}
    )
    
    const menuModalMethods = e => {
        e.preventDefault();
        setMenuItem(listing);
        toggleItemModal();
    }

    const createCartedItem = e =>{
        e.preventDefault()
        e.stopPropagation()
        setPrevQuantity(cartQuantity)
        setCartQuantity(cartQuantity + 1)
        if (prevQuantity === 0) dispatch(createCart({cart:currentCart()}));
        else if(prevQuantity) dispatch(updateCart({cart:currentCart()}));
        dispatch(fetchCart())
    }


    // useEffect(()=>{
    //     // dispatch(fetchCart(sessionUser.id))
    // },[])
    
    return (
        <li className='item-listing' >
                <div onClick={menuModalMethods}>
                    <h4 className='item-name' >{listing.itemName}</h4>
                    <p className='item-price'>{`$${listing.price}`}</p>
                    <p className='item-description'>{listing?.description}</p>
                </div>
                <button className='add-to-cart' onClick={createCartedItem}>{cartQuantity? cartQuantity:"+"}</button>
        </li>
     )
}

export default MenuListingItem;