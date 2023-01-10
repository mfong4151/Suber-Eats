import csrfFetch from './csrf';


export const RECEIVE_CART =  `cart/RECEIVE_CART`;
export const REMOVE_CART = `cart/REMOVE_CART`;


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


export const getCart = state => {
    if (!state.cart) return null;    
    return state.cart
}

export const fetchCart = (userId) => async dispatch =>{

    const res = await csrfFetch(`/api/carts/${userId}`)
    if (res.ok){
        const data = await res.json();
        dispatch(receiveCart(data))
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



export const updateCart = cart => async dispatch =>{
    const res = await csrfFetch(`/api/carts/${cart.id}`,{
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
    const res = await fetch(`/api/carts/${cartId}`,{
        method: "DELETE",
        
    })
    if (res.ok){
        dispatch(removeCart(cartId))
    }
}


const cartsReducer = (state = {}, action) =>{

    switch(action.type){
        
  
        case RECEIVE_CART:
            return  {...state,...action.payload.cart}
        case REMOVE_CART:
            const newState = {...state}
            delete state[action.payload.cartId]
            return 
        default:
            return state
    }

}

export default cartsReducer;