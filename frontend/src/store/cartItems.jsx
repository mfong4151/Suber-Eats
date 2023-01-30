import csrfFetch from './csrf';

export const RECEIVE_CART_ITEMS = `cartItems/RECEIVE_CART_ITEMS`;
export const RECEIVE_CART_ITEM =  `cartItems/RECEIVE_CART_ITEM`;
export const REMOVE_CART_ITEM = `cartItems/REMOVE_CART_ITEM`;


const receiveCartItems = cartItems =>(
    {
        type: RECEIVE_CART_ITEMS,
        payload: cartItems
    }   
)

const receiveCartItem = cartItem =>(
    {
        type: RECEIVE_CART_ITEM,
        payload: cartItem
    }   
)

const removeCartItem = cartItemId =>(
    {
        type: REMOVE_CART_ITEM,
        payload: cartItemId
    }
)

export const getCartItems =  state =>{
    if(!state.cartItems) return []
    return Object.values(state.cartItems)
}

export const getCartItemsMap = state =>{
    const res = {};
    if(!state.cartItems) return res;
    for(const cartItem of Object.values(state.cartItems)) res[cartItem.menuItemId] = cartItem.quantity
    return res
}


export const getCartItemRestIds = state =>{
    const res = new Set();
    if(!state.cartItems) return res;
    for(const cartItems of Object.values(state.cartItems)) res.add(cartItems.menuItemId);
    return res;
}


export const fetchCartItems = (cartId) => async dispatch =>{

    const res = await csrfFetch(`/api/carts/${cartId}/cart_items`)
    if (res.ok){
        const data = await res.json();
        dispatch(receiveCartItems(data))
    }
}

export const createCartItem = (cartItem) => async dispatch => {
    console.log(cartItem)
    const res = await csrfFetch(`/api/carts/${cartItem.cartId}/cart_items`,{
        method: "POST",
        body: JSON.stringify(cartItem),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    if (res.ok){
        const cartItem = await res.json();
        dispatch(receiveCartItem(cartItem))
    }
}



export const updateCartItem = (cartItem, cartItemId) => async dispatch =>{
    const res = await csrfFetch(`/api/carts/${cartItem.cartItem.cartId}/cart_items/${cartItemId}`,{
        method: "PATCH",
        body: JSON.stringify(cartItem),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })

    if (res.ok){
        const cart = await res.json();
        dispatch(receiveCartItem(cart))
    }
}


export const deleteCartItem = cartItemId => async dispatch =>{
    const res = await csrfFetch(`/api/cart_items/${cartItemId}`,{
        method: "DELETE",
        
    })
    if (res.ok){
        dispatch(removeCartItem(cartItemId))
    }
}


const cartItemsReducer = (state = {}, action) =>{

    switch(action.type){
        case RECEIVE_CART_ITEMS:
            return {...action.payload.cartItems}
  
        case RECEIVE_CART_ITEM:
            return  {...state,...action.payload.cartItem}
        case REMOVE_CART_ITEM:
            const newState = {...state}
            delete newState[action.payload]
            return newState
        default:
            return state
    }

}

export default cartItemsReducer;

