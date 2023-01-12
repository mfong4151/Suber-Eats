import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from './restaurant';
import sessionReducer from './session';
import usersReducer from './user';
import menusReducer from './menu'
import cartsReducer from './cart';
import transactionsReducer from './transaction';
import reviewsReducer from './review';
import locationsReducer from './location';

let enhancer;
export const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    restaurants: restaurantsReducer,
    menu: menusReducer,
    cart:cartsReducer,
    transaction: transactionsReducer,
    locations:locationsReducer
})

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadState = {}) => {
    return createStore(rootReducer, preloadState, enhancer)
}

export default configureStore