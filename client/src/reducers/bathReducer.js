import { FETCH_BATHS, FETCH_BATH, UPDATE_BATH , FETCH_BATHACCESSORIES, FETCH_BATHACCESSORIE, UPDATE_BATHACCESSORIE, FETCH_BATHHARDWARES, FETCH_BATHHARDWARE} from '../actions/bathActionCreator';

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
    case FETCH_BATHACCESSORIES:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_BATHACCESSORIE:
    return {
      ...state,
      item: action.payload
    };
    case UPDATE_BATHACCESSORIE:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_BATHHARDWARES:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_BATHHARDWARE:
    return {
      ...state,
      item: action.payload
    };
    default:
      return state;
  }
}
