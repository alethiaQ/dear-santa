// exporting action type as a const so its less prone to typos and unnecessary bugs
import { deduceFunds, increaseFunds } from './funds';
export const ADD_GIFT = "ADD_GIFT"; 
export const DELETE_GIFT = "DELETE_GIFT";
export const SET_GIFTS = "SET_GIFTS";
export const LIKE_GIFT = "LIKE_GIFT";

export const addGift = (gift) => {
    return { type: ADD_GIFT, gift };
}; 

export const deleteGift = gift => {
    return { type: DELETE_GIFT, gift }
}; 
// accepts our fetched data as an argument, which we will send to our reducer

export const setGifts = gifts => {
    return { type: SET_GIFTS, gifts };
};
// fetch current gift list from routed API then AFTER promise is returned dispacth our action creator along with gifts to set quotes up on DOM to be rendered  

export const fetchGifts = () => {
    return dispatch =>
        fetch("http://localhost:3001/gifts")
            .then(r => r.json())
            .then(data => {
                dispatch(setGifts(data));
            });
};

// post new gift to db via fetch request then dispatch addGift action creator to reducer 
export const createGift = gift => {
    return dispatch => {
        fetch("http://localhost:3001/gifts", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gift)
        })
            .then(resp => resp.json())
            .then(gift => {
                dispatch(addGift(gift));
                dispatch(deduceFunds(gift));
            });
    }
};

// send delete request via fetch with gift id, then after thats successful dispatch our delete action with appropriate item 

export const destroyGift = gift => {
    return dispatch =>
        fetch(`http://localhost:3001/gifts/${gift.id}`, {
            method: "DELETE"
        }).then(() => {
            dispatch(deleteGift(gift));
            dispatch(increaseFunds(gift))
        });
};
// action creator for like attribute
export const likeGift = id => {
    return { type: LIKE_GIFT, id };
};