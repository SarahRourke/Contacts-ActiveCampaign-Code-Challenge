import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Contact from './Contact';

const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);
    const [loaded, setLoaded] = useState(false);
   
  
    useEffect(() => {
        
        axios.get('https://cors-anywhere.herokuapp.com/sahmed93846.api-us1.com/api/3/contacts?limit=10', {
            headers: {
                'Api-Token' : process.env.REACT_APP_API_TOKEN,
                'Cache-Control' : 'max-age=120 public max-stale[=200]'
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