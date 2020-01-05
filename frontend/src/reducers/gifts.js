import { ADD_GIFT, REMOVE_GIFT, SET_GIFTS } from "../actions/gifts";


export default  (state = [], action) => {
    let gift; 
    let idx;
    switch (action.type) {
        // add new gift to current collection
        case ADD_GIFT:
            return [...state, action.gift ];
        // delete gift from collection based on ID #
        case REMOVE_GIFT:   
            gift = state.find(g => g.id === action.id);
            idx = state.indexOf(gift);
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
        // after fetch grabs gift collection, we set them here to be displayed
        case SET_GIFTS:
            return action.gifts;
        default:
            return state; 
   }
 };
