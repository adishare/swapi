import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { people } from "./people/reducers";

const logger = store => next => action => {
    // console.log('STORE ' ,action.type, action)
    next(action)
}

export const appReducer = combineReducers({
    people, 
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        // resets redux store state
        state = undefined
    }
    return appReducer(state, action)
}

const devTool = compose
  // process.env.NODE_ENV === "development"
  //   ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //     window.__REDUX_DEVTOOLS_EXTENSION__()
  //   : compose;


const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(thunkMiddleware, logger),
        devTool
    )
);

export default store;
