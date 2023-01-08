import csrfFetch from './csrf';


const RECEIVE_MENU = 'menu/receiveMenu';


const receiveMenu = menu =>(
    {
        type: RECEIVE_MENU,
        payload: menu
    }   
)

export const getMenuItems = state =>{
    if(!state.menu.menuItems) return [];
    return Object.values(state.menu.menuItems);
}

export const getMenuReviews = state =>{
    if(!state.menu.menuItems) return [];
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
            
        default:
            return state
    }

}

export default menusReducer;