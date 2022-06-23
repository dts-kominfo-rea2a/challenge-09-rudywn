// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css"

const Contact = ({ data: {name, email, photo, phone}}) => {
    return (
        <div className='contact-wrap'>
            <img src={photo} alt={name} className='contact-img'/>
            <div className='contact-info'>
                <h5>{name}</h5>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact;