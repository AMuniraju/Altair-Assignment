import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import appReducers from "./reducers";

const consoleMessage = (store) => (next) => (action) => {
  let result ;
  console.log("Action type: ",action.type);
  console.log("Store : ",store.getState());
  result = next(action);
  console.log("Store : ",store.getState());
  return
}
const storeFactory = (initialState) => {
  return applyMiddleware(thunk,consoleMessage)(createStore)(appReducers,initialState);
}

export default storeFactory;
