import { Api } from "./config/request";

export const getPeopleList = query => {
    return Api.getListRequest('/people', query);
};
export const getPeopleById =id => {
    return Api.getRequest(`/people/${id}`);
};

export const People = { 
    getPeopleList ,
    getPeopleById,
};
