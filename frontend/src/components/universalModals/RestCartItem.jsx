import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './UserMenuModal.css'
import { updateCartItem } from '../../store/cartItems'
import { deleteCartItem } from '../../store/cartItems'

const RestCartItem = ({restCartItem}) => {
    const dispatch = useDispatch();

    const currentCartItem = (cartQuantity) =>{
        return {   menuItemId: restCartItem.menuItemId,
            cartId: restCartItem.cartId,
            quantity: cartQuantity,}
        
        }
    const addQuantity= e=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(updateCartItem({cartItem:currentCartItem(restCartItem.quantity+ 1)},restCartItem.id))
    }

    
   
    const subQuantity = e =>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(updateCartItem({cartItem:currentCartItem(restCartItem.quantity- 1)},restCartItem.id))
        .then(()=>{
                if(restCartItem.quantity === 1) dispatch(deleteCartItem(restCartItem.id))


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
                    <h3 className='cart-item-name'>{restCartItem.name}</h3>
                    <p className='cart-item-sum'>${Math.round(restCartItem.adjPrice *100)/100}</p>
            </div>
            <div>
                {/* add the photo here if it exists  */}
            </div>
      </li>
    )
}

export default RestCartItem