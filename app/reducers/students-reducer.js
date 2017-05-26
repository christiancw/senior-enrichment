import RECEIVE_STUDENTS from '../constants';
import receiveStudents from '../action-creators/students';

const initialStudentsState = {
  students: [],
  selected: {}
}


export default function (state = initialStudentsState, action) {
  console.log("ANYTHING HERE?", action)
  const newState = Object.assign({}, state);


  switch (action.type) {

    case 'RECEIVE_STUDENTS':
      newState.students = action.students;
      break;

    default:
      return state;
  }
  return newState;
}
