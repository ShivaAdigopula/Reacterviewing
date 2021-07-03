import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_REQUEST_FAILURE, FETCH_ALBUMS_REQUEST_SUCCESS } from "./actionConstants";

export function fetchAlbumsRequest() {
    return {
        type: FETCH_ALBUMS_REQUEST,
    }
}


export function fetchAlbumsRequestSuccess(payload) {
    return {
        type: FETCH_ALBUMS_REQUEST_SUCCESS,
        payload,
    }
}

export function fetchAlbumsRequestFailure() {
    return {
        type: FETCH_ALBUMS_REQUEST_FAILURE,
    }
}