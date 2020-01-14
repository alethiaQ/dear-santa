import { ADD_GIFT, DELETE_GIFT, SET_GIFTS } from "../actions/gifts";


export default  (state = [], action) => {
    let gift; 
    let idx;
    switch (action.type) {
        // add new gift to current collection
        case ADD_GIFT:
            return [...state, action.gift ];
        // delete gift from collection based on ID #
        case DELETE_GIFT:
            return [ ...state.filter(g => g.id !== action.id)
            ];
   
        // after fetch grabs gift collection, we set them here to be displayed
        case SET_GIFTS:
            return action.gifts;
        default:
            return state; 
   }
 };
