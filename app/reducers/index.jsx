import { combineReducers } from 'redux'
import studentsReducer from './students-reducer';
import campusesReducer from './campuses-reducer';

// const initialState = {}
//
// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({
  students: studentsReducer,
  campuses: campusesReducer
});
