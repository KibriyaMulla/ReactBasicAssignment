import * as actionTypes from "../types/personType"

export const getPerson = () => {
    
    const action = {
        type: actionTypes.GET_Person
    }
    return action;
}
export const setPerson = (payload) => {
    
    const action = {
        type: actionTypes.SET_Person,
        person:payload
    }
    return action;
}
export const editPerson =(payload) =>{

   const action ={
        type:actionTypes.EDIT_Person,
        editedPerson:payload, 

        
    }
    return action;
}
