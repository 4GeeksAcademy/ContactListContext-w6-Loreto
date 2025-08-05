export const initialState = {
    contacts:[]
};

export const contactsReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_CONTACTS":
            return { ...state, contacts: action.payload };

        case "ADD_CONTACT":
            return { ...state, contacts: [...state.contacts, action.payload] };

        case "DELETE_CONTACT":
            return { ...state, 
            contacts: state.contacts.filter(c => c.id !== action.payload) };

        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map(c =>
                    c.id === action.payload.id ? { ...c, ...action.payload } : c
                )
            }
        default:
            return state;
    }

};