import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

import portfolioReducer from "./portfolioReducer";
import operationsReducer from "./operationsReducer";

export default createStore(
    combineReducers(
        {
            portfolio: portfolioReducer,
            operations: operationsReducer,
        }
    ),
    composeWithDevTools(applyMiddleware(thunk))
);