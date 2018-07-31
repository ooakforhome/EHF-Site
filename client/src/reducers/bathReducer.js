import { FETCH_BATHS, FETCH_BATH, UPDATE_BATH } from '../actions/bathActionCreator';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_BATHS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_BATH:
    return {
      ...state,
      item: action.payload
    };
    case UPDATE_BATH:
    return {
      ...state,
      item: action.payload
    };
    default:
      return state;
  }
}

// export default function(state = {}, action){
//   switch(action.type){
//     case FETCH_BATHS:
//       return _.mapKeys(action.payload.data, 'id');
//     case FETCH_BATH:
//       return { ...state, [action.payload.data.id]: action.payload.data };
//     case UPDATE_BATH:
//       return {  ...state, [action.payload.data.id]: action.payload.data}
//     case DELETE_BATH:
//       return _.omit(state, action.payload);
//     default:
//       return state;
//   }
// }
