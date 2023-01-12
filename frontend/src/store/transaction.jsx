import csrfFetch from './csrf';



const RECEIVE_TRANSACTION = 'transaction/receiveTransaction';


const receiveTransaction = transaction =>(
    {
        type: RECEIVE_TRANSACTION,
        payload: transaction
    }
)


export const getTransactions = state => {
    if (!state.transaction) return [];
    return Object.values(state.transaction)
}



export const fetchTransactions = userId => async dispatch =>{

    const res = await csrfFetch(`/api/transactions/${userId}`);
    if(res.ok){
        const data = await res.json();
        dispatch(receiveTransaction(data))
    }
}

export const createTransaction = transaction => async dispatch => {
    const res = await csrfFetch(`/api/transactions/`,{
        method: "POST",
        body: JSON.stringify(transaction),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    if (res.ok){
        const transaction = await res.json();
        dispatch(receiveTransaction(transaction))
    }
}



export const updateTransaction = (transaction, transactionId) => async dispatch =>{
    console.log(transaction, transactionId)
    const res = await csrfFetch(`/api/transactions/${transactionId}`,{
        method: "PATCH",
        body: JSON.stringify(transaction),
        headers:{ 
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })

    if (res.ok){
        const transaction = await res.json();
        dispatch(receiveTransaction(transaction))
    }
}





const transactionsReducer = (state = {}, action) =>{

    switch(action.type){

        case RECEIVE_TRANSACTION:
            return{...state, ...action.payload.transaction}


        default:
            return state
    }

}

export default transactionsReducer;