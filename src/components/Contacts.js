import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Contact from './Contact';

const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);
    const [loaded, setLoaded] = useState(false);
   
  
    useEffect(() => {
        // added https:// to the api url to see if that makes any difference
        axios.get('https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts', {
            headers: {
                'Api-Token' : process.env.REACT_APP_API_TOKEN,
                // still figuring out cors config and how to best set headers and the settings' effects on data rendering/api calls
                'Cache-Control' : 'max-age=2 public max-stale=[86400]',
                'Credentials' : 'include'
            },
        }
        )
        .then(res => res.data)
        .then(data => {
            setContacts(data.contacts)
            setLoaded(true)     
        })
        .catch(error => console.log(error))
    }, [contacts.length])
        
    return (
        
        loaded && 
        
            <tbody>
                {contacts.map((contact => (
                    
                    <Contact key={contact.id} props={contact.id}/>

                    
                    
                )))}
            </tbody>
                
    )
}

export default Contacts;