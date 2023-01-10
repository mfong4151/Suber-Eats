import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, deleteCart} from '../../store/cart'
import './UserMenuModal.css'


const RestCartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const[itemSum, setSum] = useState(cartItem.cartSum);
    const[cartQuantity, setCartQuantity] = useState(cartItem.quantity);
    const [prevQuantity, setPrevQuantity] = useState(0)
    const currentCart = () =>(
        {   menuItemId: cartItem.menuItemId,
            restaurantId: cartItem.restaurantId,
            userId: sessionUser.id,
            quantity: cartQuantity,}
    )
    const incrementQuantity= e=>{
        e.preventDefault();
        e.stopPropagation();
        setCartQuantity(cartQuantity+ 1)
        dispatch(updateCart({cart:currentCart()}, cartItem.id))
    }

    
   
    const subCartQuantity = e =>{
        e.preventDefault()
        e.stopPropagation()
        setPrevQuantity(cartQuantity)
        setCartQuantity(cartQuantity -1 )
        if (prevQuantity === 0) dispatch(deleteCart({cart:currentCart()}));
        else if(prevQuantity) dispatch(updateCart({cart:currentCart()}));

    }

 
    
    return (
      <li className='item-qty-form'>  
            <div className="udc item-qty-form">
                    <button className="udc qty-btn grey-button qty" id="qty-left" onClick={subCartQuantity}>
                        -
                    </button>
                    <span className='qty-form udc qty'>{cartQuantity}</span>
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