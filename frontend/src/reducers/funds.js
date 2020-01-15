import { SET_FUNDS, UPDATE_FUNDS, ADD_FUND } from "../actions/funds";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_FUND:
            return [...state, action.fund];
        case SET_FUNDS:
            return action.funds;
        case UPDATE_FUNDS:
            return [...state, action.fund];
        default:
            return state;
    }
};