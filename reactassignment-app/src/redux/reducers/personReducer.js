import * as actionType from "../types/personType"

const initialState = {
    person: []
}
const personReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GET_Person:
            return {
                ...state,

            }
        default: return state;
    }
}
export default personReducer;