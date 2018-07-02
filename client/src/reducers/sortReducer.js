import {FETCH_ACCENT} from '../actions/types';

export default function(state={}, action){
  switch(action.type){
    case FETCH_ACCENT:
    return {
      ...state,
      items: action.payload
    };
    default:
      return state;
  }  
}
