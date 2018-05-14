import { combineReducers } from 'redux';
import postReducer from './postReducer'

export default combineReducers({
  posts: postReducer
});

//===== original file
// import { combineReducers } from 'redux';
// import ProductList from './reducer_product_list';
//
// const rootReducer = combineReducers({
//   productList: ProductList
// });
//
// export default rootReducer;
