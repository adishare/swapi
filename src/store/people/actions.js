import { People } from "../../services/people";
import { mutation } from "./mutations";

const handleError = (err) => {
    console.error("Error in people action : ", err);
};

// Actions
export const getPeopleListRequest = (query) => async (dispatch) => {
    try {
        dispatch(mutation.isFetchingData(true));
        let result = await People.getPeopleList(query);
        if (result) {
            dispatch(mutation.setPeopleList(result ? result : []));
            dispatch(mutation.isFetchingData(false));
            return result;
        }
    } catch (err) {
        handleError(err);
    }
};


export const getPeopleByIdRequest = (id) => async (dispatch) => {
    try {
        let result = await People.getPeopleById(id);
        dispatch(mutation.setActivePeople(result));
    } catch (err) {
        handleError(err);
    }
};


export const setActivePeopleRequest = (data) => async (dispatch) => {
    try {
        dispatch(mutation.setActivePeople(data));
    } catch (err) {
        handleError(err);
    }
};
