import C from "./constants";
import axios from "axios";
export const loginSuccess = (value) => ({
  type:C.LOGIN_SUCCESS,
  payload:value
})

export const loginFailed = (value) => ({
  type:C.LOGIN_FAILURE,
  payload:value
})

export const setFilterValue =(value) =>({
  type:C.FILTER_CHANGE,
  payload:value
})
export const removeFilter =() =>({
  type:C.REMOVE_FILTER,
  payload:{}
})

export const addItemToCart =(value) =>({
	type:C.ADD_ITEM_TO_CART,
	payload:value
});