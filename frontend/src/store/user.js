import csrfFetch, {storeCSRFToken} from './csrf';

const RECEIVE_USERS = 'user/receiveUsers';


const receiveUsers = () =>{

    return{
        type: RECEIVE_USERS,
        payload: users
    }
}


