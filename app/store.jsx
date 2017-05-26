import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import studentsReducer from './reducers/students-reducer';

export default createStore(studentsReducer, applyMiddleware(thunkMiddleware, createLogger()))
