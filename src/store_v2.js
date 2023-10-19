import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
const { createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
