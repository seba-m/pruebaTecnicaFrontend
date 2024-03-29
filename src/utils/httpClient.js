import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL;

export function get(url) {
    return axios.get(API + url)
        .then(response => response.data);
}

export function post(url, data) {
    return axios.post(API + url, data)
        .then(response => response.data);
}

export function put(url, data) {
    return axios.put(API + url, data)
        .then(response => response.data);
}

export function del(url) {
    return axios.delete(API + url)
        .then(response => response.data);
}