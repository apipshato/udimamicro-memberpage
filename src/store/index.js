import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunks';
import rootReducer from './reducers'

