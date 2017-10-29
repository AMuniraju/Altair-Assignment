import C from "../constants";
import {combineReducers} from "redux";

const filterBy = (state={},action) =>{
	switch(action.type){
		case C.FILTER_CHANGE: return action.payload;
		case C.REMOVE_FILTER: return action.payload;
		default: return state;
	}
	return state;
}
const login = (state=false,action) => {
	switch(action.type){
		case C.LOGIN_SUCCESS: return action.payload;
		case C.LOGIN_FAILURE: return action.payload;
		default: return state;
	}
	return state;
}
const errors = (state=[],action) => {
	return state;
}
const cart = (state=[],action) => {
	switch(action.type){
		case C.ADD_ITEM_TO_CART : return [...state,action.payload]
		case C.REMOVE_ITEMS_FROM_CART : return []
		default:  
			return state;
	}
}
const cardetails = (state=[],action) => {
	return state;
}
export default combineReducers({
	filterBy,
	login,
	errors,
	cart,
	cardetails
});
