import { combineReducers } from 'redux';
import postReducer from './postReducer';
import bathReducer from './bathReducer';
import petReducer from './petReducer';
import accentReducer from './accentReducer';
import smallProductsReducer from './smallProductsReducer';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  kposts: postReducer,
  smallItems: smallProductsReducer,
  bathItems: bathReducer,
  petItems: petReducer,
  accentItems: accentReducer,
  form: formReducer,
});

export default rootReducer;
