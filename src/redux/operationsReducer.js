import axios from "axios";

const defaultState = [];

export const loadOperations = (params) => async (dispatch) => {
    const request = await axios.get('/openapi/operations', {
        params
    });

    if (request.data.status === 'Ok') {
        dispatch({
            type: 'ADD_OPERATIONS',
            payload: request.data.payload.operations
        });
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_OPERATIONS':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}