
export const SET_FUNDS = "SET_FUNDS";
export const UPDATE_FUNDS = "UPDATE_FUNDS";
export const ADD_FUND = "ADD_FUND";

export const updateFundLocal = fund => {
    return { type: UPDATE_FUNDS, fund }
};
export const setFunds = funds => {
    return { type: SET_FUNDS, funds }
};
// once a new gift is created, the gift obj data is sent to the updateFunds endpoint to deduct the price amount from total funds
export const updateFunds = (gift) => {
    return dispatch =>
        fetch("http://localhost:3001/updateFunds", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gift)
        })
            .then(r => r.json())
            .then(data => {
                dispatch(updateFundLocal(data));
            });
};
export const addFund = fund => {
    return { type: ADD_FUND, fund };
};
export const fetchFunds = () => {
    return dispatch =>
        fetch("http://localhost:3001/funds")
            .then(r => r.json())
            .then(data => {
                dispatch(setFunds(data));
            });
};

export const createFund = fund => {
    return dispatch => {
        fetch("http://localhost:3001/funds", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fund)
        })
            .then(r => r.json())
            .then(fund => {
                dispatch(addFund(fund));

            });
    }
};