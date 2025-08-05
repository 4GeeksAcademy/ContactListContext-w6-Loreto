
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContacts } from "../context/ContactsContext";

const EditContact = () =>{
    const {state : contact} = useLocation()
    const navigate = useNavigate()
    const {updateContact} = useContacts();


    const [formData, setFormData] = useState(
        {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address,
        }
    );

    const handleChange = (e) =>{
        const {name, value}= e.target;
        setFormData((prev)=> ({...prev, [name]: value}))
    }

   const handleSubmit = async(e) =>{
    e.preventDefault();

    // inside {} becuase im passing contact and formData as an object
    await updateContact({...contact, ...formData})
           navigate("/")
    };
   


    return(
        <div className="container py-5">
            <h1>Edit Contact</h1>
            <form onSubmit= {handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange= {handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange= {handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                    type="text"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange= {handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input 
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange= {handleChange}
                    />
                </div>

                <button type= "submit" className="btn btn-primary me-2">
                Update
                </button>
                <button 
                type= "button" 
                className= "btn btn-secondary" 
                onClick={()=>navigate("/")}
                >
                    Cancel
                    </button>
            </form>

        </div>

    )
}
export default EditContact;