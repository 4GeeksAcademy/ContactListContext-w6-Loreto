const ContactCard = ({ contact }) => {
  return (
    <div>
      <h5 className="mb-1">{contact.name}</h5>
      <p className="mb-1">
        <i className="fas fa-map-marker-alt me-2 text-muted"></i>{contact.address}
      </p>
      <p className="mb-1">
        <i className="fas fa-phone-alt me-2 text-muted"></i>{contact.phone}
      </p>
      <p className="mb-0">
        <i className="fas fa-envelope me-2 text-muted"></i>{contact.email}
      </p>
    </div>
  );
};

export default ContactCard;
