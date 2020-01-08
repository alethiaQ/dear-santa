// exporting action type as a const so its less prone to typos and unnecessary bugs 
export const ADD_GIFT = "ADD_GIFT"; 
export const REMOVE_GIFT = "REMOVE_GIFT";
export const SET_GIFTS = "SET_GIFTS";


export const addGift = (gift) => {
    return { type: ADD_GIFT, gift };
}; 

export const deleteGift = id => {
    return { type: REMOVE_GIFT, id }
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
            });
    }
};

// send delete request via fetch with gift id, then after thats successful dispatch our delete action with appropriate item 

export const destroyGift = id => {
    return dispatch =>
        fetch(`http://localhost:3001/gifts/${id}`, {
            method: "DELETE"
        }).then(() => {
            dispatch(deleteGift(id));
        });
};