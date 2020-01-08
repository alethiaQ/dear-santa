import { SET_FUNDS } from "../actions/funds";

export default (state = [], action) => {
    let idx; 
    switch (action.type) {
        case SET_FUNDS:
            return [...state, action.amount]; 
        default:
            return state; 
    }
}