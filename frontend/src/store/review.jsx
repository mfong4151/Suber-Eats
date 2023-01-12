import csrfFetch from './csrf';

import { removeReview } from './menu';

const RECEIVE_REVIEW = 'review/receiveReview';

const REMOVE_REVIEW = 'review/removeReview';

const receiveReview = reviews =>(
    {
        type: RECEIVE_REVIEW,
        payload: reviews
    }
)




export const getReviews = state => {
    if (!state.review) return [];
    return Object.values(state.review)
}



export const fetchReviews = userId => async dispatch =>{

    const res = await csrfFetch(`/api/reviews/${userId}`);
    if(res.ok){
        const data = await res.json();
        dispatch(receiveReview(data))
    }
}

export const createReview = review => async dispatch => {
    const res = await csrfFetch(`/api/reviews/`,{
        method: "POST",
        body: JSON.stringify(review),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    if (res.ok){
        const review = await res.json();
        dispatch(receiveReview(review))
    }
}



export const updateReview = (review, reviewId) => async dispatch =>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`,{
        method: "PATCH",
        body: JSON.stringify(review),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })

    if (res.ok){
        const review = await res.json();
        dispatch(receiveReview(review))
    }
}



export const deleteReview = reviewId => async dispatch =>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`,{
        method: "DELETE",
        
    })
    if (res.ok){
        dispatch(removeReview(reviewId))
    }
}




const reviewsReducer = (state = {}, action) =>{

    switch(action.type){

        case RECEIVE_REVIEW:
            return{...state, ...action.payload.menu.reviews}

        case REMOVE_REVIEW:
            const newState = {...state}
            delete newState.menu.reviews[action.payload]
            return

        default:
            return state
    }

}

export default reviewsReducer;