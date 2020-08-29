import axios from "axios";
import { API_URL } from "./apiUrl";

axios.interceptors.request.use((config) => {
    console.info("✉️ ", `${(config.method).toUpperCase()} => ${config.url} => `, config.params ? config.params : '{}', config.data ? config.data : '{}' )
    return config;
}, (error) => {
    console.error("✉️ ", error)
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.info(" ← ", `${(response.config.method).toUpperCase()} response => ${response.config.url} => `, response.status, response.data)
    return response;
}, (error) => {
    console.error(" ← ", error)
    return Promise.reject(error.message);
});

const getDefaultHeaders = () => ({
    "Content-Type": "application/json",
});

const handleError = err => {
    err.response ?
        console.log('err.response -> ', err.response) :
        console.error(`Api call error in services -> request.js : `, {
            err
        });

    // throw new Error(err)
};

export const request = axios.create({
    baseURL: API_URL,
    headers : getDefaultHeaders()
})

export const getRequest = async (url, query, headers) => {
    try {
        let defaultHeaders = getDefaultHeaders()
        const res = await axios.get(API_URL + url, {
            headers: {...headers,...defaultHeaders},
            params: {...query}
        });
        return (res.data && res.data.results) ? res.data.results : res.data;
    } catch (err) {
        handleError(err);
        return false
    }
};

export const getListRequest = async (
    url,
    query,
    headers,
) => {
    try {
        let defaultHeaders = getDefaultHeaders()
        const res = await axios.get(API_URL + url, {
            headers: {...headers,...defaultHeaders},
            params: {...query}
        });

        return res.data.result ? res.data.result : res.data;
    } catch (err) {
        handleError(err);
    }
};


export const Api = {
    getListRequest,
    getRequest,
    request,
};
