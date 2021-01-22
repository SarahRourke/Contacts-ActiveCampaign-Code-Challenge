import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Contact from './Contact';

const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);
    
    
    useEffect(() => {
        axios.get('/contacts?limit=1', {
            headers: {
                'Api-Token' : process.env.REACT_APP_API_TOKEN,
                'Cache-Control' : 'max-age=12 public max-stale[=5]'
            }
        })
        .then(res => res.data)
        .then(data => {
            setContacts(data.contacts)
            // console.log(data)
        })
        .catch(error => console.log(error))
        }, [])

    return (
        
            <tbody>
                
                {contacts.map((contact => (
                    <Contact key={contact.id} props={contact.id}/>
                )))}
            </tbody>
        
    )
}

export default Contacts;