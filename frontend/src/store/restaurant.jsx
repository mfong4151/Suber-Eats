import csrfFetch, {storeCSRFToken} from './csrf';
import Heap from 'heap-js';

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

// {
//      cuisineType:''
//     nearYou:false,
//     topRated:false,
//     rating:false,
//     priceRange:0,
//     ,
//   }

const scoreRestaurant = (filterOptions, rest) =>{
    const {nearYou, topRated, priceRange, rating, cuisineType}  = filterOptions
    let score = 0;

    if (cuisineType && rest.cuisineType != cuisineType) {
        rest['score'] = -1
        return rest;
    }

    switch(priceRange){
        case 1 && rest.price > 7:
            rest['score'] = -1
            return rest;
        case 2 && (rest.price < 7 || rest.price > 13):
            rest['score'] = -1
            return rest;
        case 3 && (rest.price < 13):
            rest['score'] = -1
            return rest;
    }


    if(nearYou) score += rest.distance
    if(topRated) score += rest.rating
    rest['score'] = score
    return score;
    


    
}
//This is a little bit extra, and theres no reason to use a heap persay, other JS librarys will do the job
export const getRestaurantHeap = filterOptions => state =>{
    if (!state.restaurants) return [];

    const maxHeap = new Heap((a, b) => a.score - b.score)    
    maxHeap.init([])
    for(const rest of Object.values(state.restaurants)) 
        // maxHeap.push(scoreRestaurant(rest))
    

    return(maxHeap.toArray())
    
}

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


//its important to note here that a rammification of how this fetch is done is that we will not have a rerender if the user clicks in an area where no restaurants exist

export const fetchRestaurants = () => async dispatch =>{
    const res = await csrfFetch("/api/restaurants")
    if (res.ok){
        const data = await res.json();
        if(!(Object.keys(data).length === 0)){
            dispatch(receiveRestaurants(data))
        }
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