import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import { contactsReducer, initialState } from "./storeReducer";

//create the context, making state and dispatch available to my entire app
const ContactsContext = createContext();

//create hook with the context for easier usage
export const useContacts = () => useContext(ContactsContext);

// create the provider
export const ContactsProvider = ({children}) => {
//state= contact list (state.contacts), dispatch() the way to update state
    const [state, dispatch] = useReducer(contactsReducer, initialState)

// fetch contacts when app starts

useEffect(() =>{
    const fetchContacts = async() =>{
        try {
            const response= await fetch('https://playground.4geeks.com/contact/agendas/example/contacts',
                {method: "GET"
                }
            )
            const data = await response.json();
            console.log("the contacts i get when i do fetch: data.contacts ", data.contacts)
            
            dispatch({type: "LOAD_CONTACTS", payload: data.contacts})
        
        } catch (error) {
            console.log(error.message)
        }
    }
    fetchContacts();
}, []);

const addContact = async (newContact) =>{
    try {
        const response= await fetch(`https://playground.4geeks.com/contact/agendas/example/contacts`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        })
        if (!response.ok) throw new Error("No se pudo guardar el contacto");

        const data= await response.json()
        console.log("contacto guardado", data)

        dispatch ({type: "ADD_CONTACT", payload: data})   
   
    } catch (error) {
        console.log(error.message)
    }

}

    const deleteContact = async(id) =>{
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/example/contacts/${id}`,
                {
                    method: "DELETE"
                });

            if (!response.ok) throw new Error("Failed to delete");
            console.log("Detele successful")

            dispatch({type: "DELETE_CONTACT", payload: id})

        } catch (error) {
            console.log(error.message);
        }
    }

    const updateContact = async(contact)=>{

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/example/contacts/${contact.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contact)
                });

            if (!response.ok) throw new Error("Failed to update");
            const updatedData= await response.json()
            console.log("Updated successfully", updatedData)

                dispatch({type: "UPDATE_CONTACT", payload: updatedData})

        } catch (error) {
            console.log(error.message);
        }
    }

return (
    <ContactsContext.Provider 
    value= {{state, dispatch, addContact, deleteContact, updateContact}}>
    {children}
    </ContactsContext.Provider>

);


}
