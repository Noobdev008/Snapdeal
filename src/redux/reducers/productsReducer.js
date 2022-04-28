import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};
const addItem =[]

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};


export const addItems = (state = addItem, action) => {
    switch (action.type) {
      case ActionTypes.ADD_SELECTED_PRODUCT:
      return[
          ...state, action.payload
      ]
      break;
      case ActionTypes.DELITEM:
       return state = state.filter((x)=>{
         return x.id !== action.payload.id
       })
      break;
    
    default:
      return  state;
  }

}