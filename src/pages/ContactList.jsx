import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import { useContacts } from "../context/ContactsContext";



const ContactList = () => {

    const { state, deleteContact } = useContacts();
    const navigate = useNavigate();

    console.log("rendered contacts: ", state.contacts);

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Contact List</h1>
                <Link to="/add" className="btn btn-success">
                Add New Contact
                </Link>
            </div>

            {/* Loop over contacts */}
            <div className="row">
                {state.contacts.length === 0 ? (
                    <p>No contacts available.</p>
                 ):(
                    state.contacts.map((contact) => (
                    <div className="col-12 mb-3" key={contact.id}>
                        <div className="card p-3">
                            <div className="row align-items-center g-0">

                                {/* Image */}
                                <div className="col-md-2 text-center">
                                    <img
                                        src="https://picsum.photos/id/237/100/100"
                                        className="img-fluid rounded-circle"
                                        alt="contact"
                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                    />
                                </div>

                                {/* Info */}
                                <div className="col-md-8">
                                    <ContactCard contact={contact} />
                                </div>

                                {/* Buttons */}
                                <div className="col-md-2 text-end">
                                    <button className="btn btn-link me-2"
                                        onClick={() => navigate("/edit", { state: contact })} >
                                        <i className="fas fa-pencil-alt">
                                        </i></button>
                                    <button className="btn btn-link text-danger"
                                        onClick={() => deleteContact(contact.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            )}
            </div>
        </div>
    );
};

export default ContactList;
