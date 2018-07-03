import {FETCH_ACCENT} from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action){
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


//mapStateToProps needs to be a function
const mapStateToProps = ({ reducer1, reducer2}) =>
    ({reducer1, reducer2 });

connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(component)

//mapDispatchToProps can either be a function or an object.
