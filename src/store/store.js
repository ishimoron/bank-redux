import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {userReducer} from "./userReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cash: cashReducer,
    user: userReducer
})


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)