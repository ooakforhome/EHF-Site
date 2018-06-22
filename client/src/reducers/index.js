import { combineReducers } from 'redux';
import postReducer from './postReducer';
import imgReducer from './imgReducer'
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  posts: postReducer,
  imgposts: imgReducer,
  form: formReducer
});

export default rootReducer;
