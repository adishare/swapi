import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { people } from "./people/reducers";

const logger = store => next => action => {
    next(action)
}

export const appReducer = combineReducers({
    people, 
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

const devTool = compose

const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(thunkMiddleware, logger),
        devTool
    )
);

export default store;
