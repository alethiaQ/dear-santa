import { ADD_GIFT, DELETE_GIFT, SET_GIFTS, LIKE_GIFT } from "../actions/gifts";


export default  (state = [], action) => {
    let gift; 
    let idx;
    switch (action.type) {
        // add new gift to current collection
        case ADD_GIFT:
            action.gift.likes = 0 
            return [...state, action.gift ];
        // delete gift from collection based on ID #
        case DELETE_GIFT:

            return [ ...state.filter(g => g.id !== action.gift.id)
            ];
   
        // after fetch grabs gift collection, we set them here to be displayed
        case SET_GIFTS:
            return action.gifts;
        case LIKE_GIFT:
            gift = state.find(g => g.id === action.id)
            if (isNaN(gift.likes)) {
                gift.likes = 1
            }
            else {
                gift.likes = gift.likes + 1
            }
            
            return [
                ...state
            ];

        default:
            return state; 
   }
 };
