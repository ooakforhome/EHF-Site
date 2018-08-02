import { FETCH_OTDS, FETCH_OTD, FETCH_BOOKCASES, FETCH_BOOKCASE, FETCH_HOOKNRODS, FETCH_HOOKNROD, FETCH_WINDOWPANELS, FETCH_WINDOWPANEL, FETCH_SHOWERCURTAINS, FETCH_SHOWERCURTAIN, FETCH_WINDOWHARDWARES, FETCH_WINDOWHARDWARE, FETCH_BEAUTYDEVICES, FETCH_BEAUTYDEVICE, FETCH_OUTDOORLIGHTINGS, FETCH_OUTDOORLIGHTING, FETCH_GARDENS, FETCH_GARDEN} from '../actions/smallproductsActionCreator';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_OTDS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_OTD:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_BOOKCASES:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_BOOKCASE:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_HOOKNRODS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_HOOKNROD:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_WINDOWPANELS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_WINDOWPANEL:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_SHOWERCURTAINS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_SHOWERCURTAIN:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_WINDOWHARDWARES:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_WINDOWHARDWARE:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_BEAUTYDEVICES:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_BEAUTYDEVICE:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_OUTDOORLIGHTINGS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_OUTDOORLIGHTING:
    return {
      ...state,
      item: action.payload
    };
    case FETCH_GARDENS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_GARDEN:
    return {
      ...state,
      item: action.payload
    };
    default:
      return state;
  }
}
