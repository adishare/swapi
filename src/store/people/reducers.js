import { initialState } from "./states";

export const people = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PEOPLE_LIST": {
            return Object.assign({}, state, {
                peopleList: action.data.results,
                peopleListCount: action.data.count,
            });
        }
        case "SET_ACTIVE_PEOPLE": {
            return Object.assign({}, state, {
                activePeople: action.data,
            });
        }
        
        case "IS_FETCHING_DATA": {
            return Object.assign({}, state, {
                isFetching: action.data,
            });
        }
        default:
            return state;
    }
};
