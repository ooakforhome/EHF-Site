import { FETCH_ACCENTS, FETCH_ACCENT, UPDATE_ACCENT } from '../actions/accentActionCreator';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_ACCENTS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_ACCENT:
    return {
      ...state,
      item: action.payload
    };
    case UPDATE_ACCENT:
    return {
      ...state,
      item: action.payload
    };
    default:
      return state;
  }
}
