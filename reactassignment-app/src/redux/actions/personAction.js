import * as actionTypes from "../types/personType"

export const getPerson = () => {
    const action = {
        type: actionTypes.GET_Person
    }
    return action;
}
