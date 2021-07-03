import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_REQUEST_SUCCESS } from "./actionConstants";

const initState = {
    albums: [],
    loading: false,
};
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_REQUEST:
            state.loading = true;
            return state;
            break;
        case FETCH_ALBUMS_REQUEST_SUCCESS:
            const {payload} = action;
            state.loading = false;
            state.albums = payload;
            return state;
            break;
        case FETCH_ALBUMS_REQUEST_SUCCESS:
            state.loading = false;
            state.albums = [];
            return state;
            break;
        default:
            return state;
    }
};

export default rootReducer;
