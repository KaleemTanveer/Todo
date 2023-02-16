import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducer";

const reducer = combineReducers({
  todoReducer,
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
