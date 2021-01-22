import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Contact from './Contact';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    
    
    useEffect(() => {
        axios.get('/contacts/47', {
            // headers: {
            //     'Api-Token' : process.env.REACT_APP_API_TOKEN,
            //     'Cache-Control' : 'max-age=12 maxHttpHeaderSize="16384" public max-stale[=5]'
            // }
        })
        .then(res => res.data)
        .then(data => {
            setContacts(data.first)
            // console.log(data)
        })
        .catch(error => console.log(error))
        });

    
    
    
    // const contact_id = contacts.id
    return (
        
            <tbody>
                
                {contacts.map((contact => (
                    <Contact key={contact.id} contact={contact}/>
                )))}
            </tbody>
        
       
     
    )
}

export default Contacts;