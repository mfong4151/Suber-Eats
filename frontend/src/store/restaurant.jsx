import csrfFetch, {storeCSRFToken} from './csrf';

const RECEIVE_RESTAURANTS = 'restaurant/receiveRestaurants';

const receiveRestaurants = restaurants =>(
    {
        type: RECEIVE_RESTAURANTS,
        payload: restaurants
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
    console.log(state)
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


const restaurantsReducer = (state = {}, action) =>{
    switch(action.type){

        case RECEIVE_RESTAURANTS:
            return{...state, ...action.payload.restaurants}
            
        default:
            return state
    }

}

export default restaurantsReducer;