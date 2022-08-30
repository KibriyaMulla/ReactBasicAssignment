import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import personReducer from "./reducers/personReducer";
import { watchergetPersonSaga } from "./saga/getPersonSaga";


const reducer = combineReducers({
    personReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watchergetPersonSaga);
export default store;


