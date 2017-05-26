
const initialCampusesState = {
  campuses: [],
  selectedCampus: {}
}


export default function (state = initialCampusesState, action) {
  console.log("CAMPUSES REDUCER HERE", action)
  const newState = Object.assign({}, state);


  switch (action.type) {

    case 'RECEIVE_CAMPUSES':
      newState.campuses = action.campuses;
      break;

    default:
      return state;
  }
  return newState;
}
