import csrfFetch from './csrf';
import {cartNames, sizeCarts } from './utils/cartMethods';

export const RECEIVE_CARTS = `cart/RECEIVE_CARTS`;
export const RECEIVE_CART =  `cart/RECEIVE_CART`;
export const REMOVE_CART = `cart/REMOVE_CART`;



const receiveCarts = carts =>(
    {
        type: RECEIVE_CARTS,
        payload: carts
    }   
)

const receiveCart = cart =>(
    {
        type: RECEIVE_CART,
        payload: cart
    }   
)

const removeCart = cartId =>(
    {
        type: REMOVE_CART,
        payload: cartId
    }
)

export const getCart = cartId => state =>{
    if(!state.cart || !state.cart[cartId]) return null
    return state.cart[cartId]
}

export const getCartsArray = state =>{
    if (!state.carts) return []
    return Object.values(state.cart)
}


export const getCarts = state => {
    if (!state.cart) return null;    
    return state.cart
}

export const getCartsRestIdKeys = state => {
    const res = {}
    if(!state.cart) return res;
    for(const cart of Object.values(state.cart)) res[cart.restaurantId] = cart.id;
    return res;
    
}

export const getCartsRestIds = state =>{
    const res = new Set()
    if(!state.cart) return res;
    for(const cart of Object.values(state.cart)) res.add(cart.restaurantId);
    return res;
}

export const getCartSize = state =>{
    if(!state.cart) return null
    
    return sizeCarts(state.cart)
}
export const getCartNames = state =>{
    if(!state.cart) return []
    
    return cartNames(state.cart)
}




export const fetchCart = (userId) => async dispatch =>{
    const res = await csrfFetch(`/api/carts/${userId}`)
    if (res.ok){
        const data = await res.json();
        dispatch(receiveCarts(data))
    }
}

export const createCart = cart => async dispatch => {
    const res = await csrfFetch(`/api/carts/`,{
        method: "POST",
        body: JSON.stringify(cart),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    if (res.ok){
        const cart = await res.json();
        dispatch(receiveCart(cart))
    }
}



export const updateCart = (cart, cartId) => async dispatch =>{
    const res = await csrfFetch(`/api/carts/${cartId}`,{
        method: "PATCH",
        body: JSON.stringify(cart),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })

    if (res.ok){
        const cart = await res.json();
        dispatch(receiveCart(cart))
    }
}


export const deleteCart = cartId => async dispatch =>{
    const res = await csrfFetch(`/api/carts/${cartId}`,{
        method: "DELETE",
        
    })
    if (res.ok){
        dispatch(removeCart(cartId))
    }
}


const cartsReducer = (state = {}, action) =>{

    switch(action.type){
        case RECEIVE_CARTS:
            return {...action.payload.cart}
  
        case RECEIVE_CART:
            return  {...state,...action.payload.cart}
        case REMOVE_CART:
            const newState = {...state}
            delete newState[action.payload]
            return newState
        default:
            return state
    }

}

export default cartsReducer;