import csrfFetch from './csrf';


const RECEIVE_LOCATION = 'location/receiveLocation';


const receiveLocation = locations =>(
    {
        type: RECEIVE_LOCATION,
        payload: locations
    }
)


export const getLocation = state => {
    if (!state.locations) return [];
    return Object.values(state.location)
}

export const checkUserLoc = userId => (state) =>{
    if(!state.locations[userId]) return null
    return state.locations[userId]
    
}

export const fetchLocations = () => async dispatch =>{

    const res = await csrfFetch(`/api/locations/`);
    if(res.ok){
        const data = await res.json();
        dispatch(receiveLocation(data))
    }
}



export const updateLocation = (location, userId) => async dispatch =>{
    const res = await csrfFetch(`/api/locations/${userId}`,{
        method: "PATCH",
        body: JSON.stringify(location),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })

    if (res.ok){
        const location = await res.json();
        dispatch(receiveLocation(location))
    }
}




const locationsReducer = (state = {}, action) =>{

    switch(action.type){

        case RECEIVE_LOCATION:
            return{...state, ...action.payload.locations}


        default:
            return state
    }

}

export default locationsReducer;