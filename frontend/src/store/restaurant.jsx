import csrfFetch, {storeCSRFToken} from './csrf';

const RECEIVE_RESTAURANTS = 'restaurant/receiveRestaurants';
const RECEIVE_RESTAURANT = 'restaurant/receiveRestaurant';

const receiveRestaurants = restaurants =>(
    {
        type: RECEIVE_RESTAURANTS,
        payload: restaurants
    }   
)


export const receiveRestaurant = restaurant =>(
    {
        type: RECEIVE_RESTAURANT,
        payload: restaurant
    }   
)

export const getRestaurants = state => {
    if (!state.restaurants) return [];
    return Object.values(state.restaurants)
}

// export const getPost = postId => store =>{
//     if(!store.posts || !store.posts[postId]) return null
//     return store.posts[postId]
// } 
export const getRestaurant = restaurantId => state => {
    if (!state.restaurants[restaurantId]) return null;
    
     return state.restaurants[restaurantId]
}


export const fetchRestaurants = () => async dispatch =>{
    const res = await csrfFetch("/api/restaurants")
    if (res.ok){
        const data = await res.json();
        dispatch(receiveRestaurants(data))
    }
}

export const fetchRestaurant = restaurantId => async dispatch =>{

    const res = await csrfFetch(`/api/restaurants/${restaurantId}`);
    if(res.ok){
        const data = await res.json();
        dispatch(receiveRestaurant(data))
    }
}

const restaurantsReducer = (state = {}, action) =>{

    switch(action.type){
        
        case RECEIVE_RESTAURANTS:
            const newState = {...state}
            if(!Object.keys(newState)){
                return{...state, ...action.payload.restaurants}
            }
            
         
            return action.payload.restaurants
            
        case RECEIVE_RESTAURANT:
            return {...state, [action.payload.restaurant.id]:action.payload.restaurant}
            
        default:
            return state
    }

}

export default restaurantsReducer;