import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useContacts } from "../context/ContactsContext";

const AddContact = () => {


    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const {addContact} = useContacts();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();


        const newContact = {
            name: fullName,
            phone,
            email,
            address,

        }

        await addContact(newContact);
        
        navigate("/");
    }

    return (
        <div className="container py-5">
            <h1>Add a new contact</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                </div>
                <div>
                <Link to="/" className="btn-success">
                    or get back to contacts
                </Link>
                </div>
            </form>
        </div>
    )
}
export default AddContact