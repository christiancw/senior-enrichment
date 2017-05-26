import { combineReducers } from 'redux'
import studentsReducer from './students-reducer';
import campusesReducer from './campuses-reducer';

export default combineReducers({
  students: studentsReducer,
  campuses: campusesReducer
});
