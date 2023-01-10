import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, getCart } from '../../store/cart'
import { updateCart } from '../../store/cart'
import './UserMenuModal.css'


const RestCartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const cart = useSelector(getCart)
    const[itemSum, setSum] = useState(cartItem.cartSum);
    const[itemQuantity, setItemQuantity] = useState(cartItem.quantity);
    console.log(cartItem)
    const incrementQuantity= e=>{
        e.preventDefault();
        e.stopPropagation();
        setItemQuantity(itemQuantity+ 1)
        dispatch(updateCart({
            cart:{
                    menuId: cart.menuId,
                    restaurantId: cart.restaurantId,
                    userId: sessionUser.id,
                    quantity: itemQuantity,
            }
        }))
    }
    const decrimentQuantity= e=>{
        e.preventDefault();
        e.stopPropagation();
        setItemQuantity(itemQuantity- 1)
        // dispatch()
        if(itemQuantity === 0){

        }
    }

    useEffect(()=>{
        dispatch(fetchCart(sessionUser.id))
    }, [itemQuantity])
    
    return (
      <li className='item-qty-form'>  
            <div className="udc item-qty-form">
                    <button className="udc qty-btn grey-button qty" id="qty-left" onClick={decrimentQuantity}>
                        -
                    </button>
                    <span className='qty-form udc qty'>{itemQuantity}</span>
                    <button className="udc qty-btn grey-button qty" id="qty-right" onClick={incrementQuantity}>
                        +
                    </button>
            </div>
            <div className='item-info'>
                    <h3 className='cart-item-name'>{cartItem.itemName}</h3>
                    <p className='cart-item-sum'>${itemSum}</p>
            </div>
            <div>
                {/* add the photo here if it exists  */}
            </div>
      </li>
    )
}

export default RestCartItem