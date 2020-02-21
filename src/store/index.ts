import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { configure } from "./configure";
import { default as sagas } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(configure, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
