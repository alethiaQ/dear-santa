import { combineReducers } from "redux";
import gifts from "./gifts";
import funds from "./funds";

export default combineReducers(
    {
        gifts: gifts,
        funds: funds
    }
);