import * as actionType from "../types/personType"

const initialState = {
    person: []
}

const personReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SET_Person:
            return {
                ...state,
                person: action.person

            }
        case actionType.EDIT_Person:

            return {
                ...state,
                editedPerson: action.editedPerson,
                // person: editPerson.map((key, value) => {
                //     if (person.id == editPerson.id) {
                //         person.name.value = editPerson.name.value;
                //         person.email.value = editPerson.email.value;
                //         person.phone.value = editPerson.phone.value;
                //         person.company.value = editPerson.company.value;
                //         person.website,value = editPerson.website.value;
                //         person.address.value = editPerson.address.value;
                //     }
                // })

            }
        default: return state;
    }
}

export default personReducer;
