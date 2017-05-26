import RECEIVE_STUDENTS from '../constants';

export default function receiveStudents (students) {
  console.log("creating an action!", students)
  return {
    type: RECEIVE_STUDENTS,
    students
  }
}
