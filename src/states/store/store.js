import { applyMiddleware, createStore } from "redux"
import MainReducer from '../reducers/MainReducer'
import { thunk } from "redux-thunk"

const initialState = {
    cart : []
}

const store = createStore(MainReducer, initialState, applyMiddleware(thunk))

export default store;