import csrfFetch from './csrf';


const RECEIVE_MENU = 'menu/receiveMenu';
const REMOVE_REVIEW = 'menu/review/removeReview';


export const removeReview = reviewId =>(
    {
        type: REMOVE_REVIEW,
        payload: reviewId
    }   
)

export const receiveMenu = menu =>(
    {
        type: RECEIVE_MENU,
        payload: menu
    }   
)

export const getMenuItems = state =>{
    if(!state.menu.menuItems) return [];
    return Object.values(state.menu.menuItems);
}

export const getMenuItemsSorted = state =>{
    const res = {};
    
    if(!state.menu.menuItems) return res;

    let header;
    for(const item of Object.values(state.menu.menuItems)){
        if (header !== item.header)  header = item.header;
        res[header]||= [];
        res[header].push(item)
    }
    
    return res

}


export const getMenuReviews = state =>{
    if(!state.menu.reviews) return [];
    return Object.values(state.menu.reviews);
}

export const fetchMenu = menuId => async dispatch =>{

    const res = await csrfFetch(`/api/restaurants/${menuId}/menus/${menuId}`);
    if(res.ok){
        const data = await res.json();
        dispatch(receiveMenu(data))
    }
}


const menusReducer = (state = {}, action) =>{
    switch(action.type){
        
        
        case RECEIVE_MENU:
            return {...state, ...action.payload.menu}
            
        case REMOVE_REVIEW:
            const newState = {...state}
            delete newState.reviews[action.payload]
            return newState
        default:
            return state
    }

}

export default menusReducer;