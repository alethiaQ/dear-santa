import { ADD_GIFT, REMOVE_GIFT, SET_GIFTS } from "../actions/gifts";


export default function manageGifts(state = {
    gifts: [],
}, action) {
    let gift; 
    let idx;
    switch (action.type) {
        case ADD_GIFT:
            console.log('Add gift- Current state', state.gifts)
            return {...state, gifts: [...state.gifts, action.gift]};
        
        case REMOVE_GIFT:
            console.log(`Remove gift ${action.id}`)
            gift = state.find(g => g.id === action.id);
            idx = state.indexOf(gift);
            return [...state.gifts.slice(0, idx), ...state.gifts.slice(idx + 1)];
        case SET_GIFTS:
            return action.gifts;
        
        default:
            console.log('Default- state', state)
            return state; 
   }
};