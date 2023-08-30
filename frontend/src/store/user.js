import csrfFetch from './csrf';

const RECEIVE_USERS = 'user/receiveUsers';
const RECEIVE_USER_LOC = 'user/recieveUserLoc'

const receiveUsers = users =>{

    return{
        type: RECEIVE_USERS,
        payload: users
    }
}



export const getUsers = state => {
    if (state.users === null) return [];
    return Object.values(state.users);
}

export const fetchUsers = () => async dispatch =>{
    const res = await csrfFetch("/api/users");
    if (res.ok){
        const data = await res.json();
        dispatch(receiveUsers(data))
        
    }

}

const usersReducer = (state = {}, action)=>{
    switch(action.type){

        case RECEIVE_USERS:
            return{...state, ...action.payload.users}

        default:
            return state;
    }

}

export default usersReducer;