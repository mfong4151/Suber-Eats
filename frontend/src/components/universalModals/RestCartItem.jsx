import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, deleteCart, fetchCart} from '../../store/cart'
import './UserMenuModal.css'


const RestCartItem = ({restCartItem}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    const currentCart = (cartQuantity) =>{
       
        return {   menuItemId: restCartItem.menuItemId,
            restaurantId: restCartItem.restaurantId,
            userId: sessionUser.id,
            quantity: cartQuantity,}
        }
    const addQuantity= e=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(updateCart({cart:currentCart(restCartItem.quantity+ 1)}, restCartItem.id))
    }

    
   
    const subQuantity = e =>{
        e.preventDefault()
        e.stopPropagation()
     
        dispatch(updateCart({cart:currentCart(restCartItem.quantity - 1)}, restCartItem.id))
            .then(()=>{
                if(restCartItem.quantity === 1) dispatch(deleteCart(restCartItem.id))


            })
        
    }

    
    return (
      <li className='item-qty-form'>  
            <div className="udc item-qty-form">
                    <button className="udc qty-btn grey-button qty" id="qty-left" onClick={subQuantity}>
                        -
                    </button>
                    <span className='qty-form udc qty'>{restCartItem.quantity}</span>
                    <button className="udc qty-btn grey-button qty" id="qty-right" onClick={addQuantity}>
                        +
                    </button>
            </div>
            <div className='item-info'>
                    <h3 className='cart-item-name'>{restCartItem.itemName}</h3>
                    <p className='cart-item-sum'>${Math.round(restCartItem.cartSum *100)/100}</p>
            </div>
            <div>
                {/* add the photo here if it exists  */}
            </div>
      </li>
    )
}

export default RestCartItem