import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,addItems } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  addItems: addItems,
});
export default reducers;
