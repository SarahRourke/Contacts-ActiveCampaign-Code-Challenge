import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Contact from './Contact';

const Contacts = () => {
    const [data, setData] = useState({});
    // const [contacts, setContacts] = useState({});
    // const [deals, setDeals] = useState([]);
    const [loaded, setLoaded] = useState(false);
   
  
    useEffect(() => {
            // contacts?
        axios.get('https://scer-cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts?include=deals', {
            headers: {
                'Api-Token' : process.env.REACT_APP_API_TOKEN,
                'Cache-Control' : 'max-age=120 max-stale[=86400]'
        }}
        )
        .then(res => res.data)
        .then(data => {
            console.log(data)
            setData({contacts: (data.contacts),
                deals: (data.deals)}
                )
            // setContacts(data)
            // setDeals(data.deals)
            setLoaded(true)
            // console.log(data)     
        })
        .catch(error => console.log(error))
    }, [])
        // console.log(data)

    

        
    return (
        
        loaded && 
        
            <tbody>

                {/* <Data contact={(data.contacts)}/> */}
               {data.contacts.map(contact => (
                   <Contact key={contact.id} contact={contact} deals={data.deals}
               
               />
                ))}   

                    
                    
                
                
            </tbody>
                
    )
}

export default Contacts;
