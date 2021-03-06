import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk)),
    );
}

export const store = configureStore();