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

    if (cuisineType && rest.cuisineType !== cuisineType) {
        score = -1
    }

    if(priceRange){
        if(priceRange === 1 && rest.avgPrice > 7){
            score = -1
        }else if(priceRange === 2 && (rest.avgPrice < 7 || rest.avgPrice > 15)){
            score = -1

        }else if(priceRange === 3 && (rest.avgPrice < 15)){
            score = -1
        }
    }

    if(nearYou && score !== -1) score += rest.distance
    if(topRated && score !== -1) score += rest.rating
    rest['score'] = score
    // console.log(rest)
    return rest;
    


    
}
//This is a little bit extra, and theres no reason to use a heap persay, other JS librarys will do the job
export const getRestaurantHeap = filterOptions => state =>{
    if (!state.restaurants) return [];

    const maxHeap = new Heap((a, b) =>  b.score- a.score)    
    maxHeap.init([])
    for(const rest of Object.values(state.restaurants))  maxHeap.push(scoreRestaurant(filterOptions, rest))
    
    // console.log(maxHeap.toArray())

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

export const getRestaurantCoords = restaurantId => state => {
    const res = {}
    if (!state.restaurants[restaurantId]) return res;
    return (
        {
        lng:state.restaurants[restaurantId].longitude,
        lat: state.restaurants[restaurantId].latitude
         }
    ) 
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