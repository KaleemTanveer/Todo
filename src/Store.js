import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./Saga";


const sagaMiddleware = createSagaMiddleware();

const reducer =  combineReducers({
  todoReducer,
  
})


const store = configureStore({ reducer, 
  // middleware: () => [sagaMiddleware]}
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)}

 
)

sagaMiddleware.run(saga);

export default store;
