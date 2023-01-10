import csrfFetch from './csrf';



const RECEIVE_TRANSACTION = 'transaction/receiveTransaction';


const receiveTransaction = transaction =>(
    {
        type: RECEIVE_TRANSACTION,
        payload: transaction
    }
)


export const getTransactions = state => {
    if (!state.transactions) return [];
    return Object.values(state.transactions)
}



export const fetchTransactions = userId => async dispatch =>{

    const res = await csrfFetch(`/api/transactions/${userId}`);
    if(res.ok){
        const data = await res.json();
        dispatch(receiveTransaction(data))
    }
}



const transactionsReducer = (state = {}, action) =>{

    switch(action.type){
        
        case RECEIVE_TRANSACTION:
            return{...state, ...action.payload.transactions}
            
       
        default:
            return state
    }

}

export default transactionsReducer;