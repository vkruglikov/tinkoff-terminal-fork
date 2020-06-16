import axios from "axios";

const defaultState = {
    positions: []
};

export const loadPortfolio = () => async (dispatch) => {
    const request = await axios.get('/openapi/portfolio');

    if (request.data.status === 'Ok') {
        dispatch({
            type: 'SET_PORTFOLIO_POSITION',
            payload: request.data.payload.positions
        });
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PORTFOLIO_POSITION':
            return {
                ...state,
                positions: [
                    ...action.payload
                ]
            };
        default:
            return state;
    }
}