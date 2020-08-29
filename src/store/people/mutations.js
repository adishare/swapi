const setPeopleList = (data) => ({
    type: "SET_PEOPLE_LIST",
    data,
});

const setActivePeople = (data) => ({
    type: "SET_ACTIVE_PEOPLE",
    data,
});

const setPeopleListData = (data) => ({
    type: "SET_PEOPLE_LIST_DATA",
    data,
});

const isFetchingData = (data) => ({
    type: "IS_FETCHING_DATA",
    data,
});

export const mutation = {
    setPeopleList,
    setActivePeople,
    setPeopleListData,
    isFetchingData,
};
