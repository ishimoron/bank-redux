import {ADD_CASH} from "./cashReducer";

const initialState = {
    users: []
}
export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"
export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}

        case REMOVE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}

        case ADD_MANY_CUSTOMERS:
            return {...state, users: [...state.users, ...action.payload]}

        default:
            return state

    }
}

export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const removeUserAction = (payload) => ({type: REMOVE_USER, payload})
export const addManyUsersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
