import { FETCH_PETS, FETCH_PET, UPDATE_PET } from '../actions/petActionCreator';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_PETS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_PET:
    return {
      ...state,
      item: action.payload
    };
    case UPDATE_PET:
    return {
      ...state,
      item: action.payload
    };
    default:
      return state;
  }
}
 
