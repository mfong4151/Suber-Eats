import csrfFetch from "../frontend/src/store/csrf";

const SET_BENCHES = "benches/setBenches"
const SET_BENCH = "benches/setBench"
const ADD_BENCH = "benches/addBench"

const setBenches = (benches) =>(
    {
        type: SET_BENCHES,
        payload: benches
    }
)

const setBench = (bench) =>(
    {
        type: SET_BENCH,
        payload:bench
    }
)

const addBench = (bench)=>(
    {
        type: ADD_BENCH,
        payload: bench
    }
)


export const fetchBenches = () => async dispatch =>{ 
    const res = await csrfFetch("/api/benches") ;
    if (res.ok){

        const data = await res.json();
        dispatch(setBenches(data));
    }
}

export const fetchBench = benchId => async dispatch =>{
    const res = await csrfFetch(`/api/benches/${benchId}`);
    if (res.ok){
        const data = await res.json()
        dispatch(setBench(data))
    }
}

export const createBench = benchData => async dispatch =>{
    const res = await csrfFetch(`/api/benches`,{
        method: "POST",
        body:  JSON.stringify(benchData),
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json'
        }
    })

    if (res.ok){
        const bench = await res.json();
        dispatch(addBench(bench))
    }

}

//const benchData = { title: "Bench6", description: "new bench", price: 150, seating: 2, lat: 15.32532, lng: 25.56569 }

// await store.dispatch(benchActions.fetchBenches())
// await store.dispatch(benchActions.fetchBench(1))
//await store.dispatch(benchActions.createBench(benchData))

const benchesReducer = (state ={}, action)=>{ 
    switch(action.type){

        case SET_BENCHES:
            return {...state, ...action.payload.benches}
        case SET_BENCH:
            return{...state, [action.payload.benchid]: action.payload.bench}
        case ADD_BENCH:
            return {...state, ...action.payload}

        default:
            return state;
    }


}

export default benchesReducer;


