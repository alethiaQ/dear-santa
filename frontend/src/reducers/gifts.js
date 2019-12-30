import { ADD_GIFT, REMOVE_GIFT, SET_GIFTS } from "../actions/gifts";


 const manageGifts = (state = {
    gifts: [], loading: false
}, action) => {
    let gift; 
    let idx;
    switch (action.type) {
        // add new gift to current collection
        case ADD_GIFT:
            return {...state, gifts: [...state.gifts, action.gift], loading: false};
        // delete gift from collection based on ID #
        case REMOVE_GIFT:
           
            gift = state.find(g => g.id === action.id);
            idx = state.indexOf(gift);
            return [...state.gifts.slice(0, idx), ...state.gifts.slice(idx + 1)];
        // after fetch grabs gift collection, we set them here to be displayed
        case SET_GIFTS:
            return {
                ...state, 
                gifts: [...state.gifts],
                loading: true
            }
        default:
            return state; 
   }
 };
export default manageGifts;