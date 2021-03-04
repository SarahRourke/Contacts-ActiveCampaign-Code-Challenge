import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Image, { propTypes } from 'react-bootstrap/Image';
import Contacts from './Contacts';
import ContactTags from './ContactTags';


const Data = (props) => {
    const [contactObject, setContactObject] = useState([ ]);
    const [contacts, setContacts] = useState([]);
    const [deals, setDeals] = useState([]);
    const [geoAddresses, setGeoAddresses] =  useState([]);
    const [loaded, setLoaded] = useState(false);
    

    
    useEffect(() => {
      
            // contacts?
            const getData = async () => {
                const response = await axios.get('https://scer-cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts?include=deals,geoAddresses,contactTags', {
                        headers: {
                            'Api-Token' : process.env.REACT_APP_API_TOKEN,
                            'Cache-Control' : 'max-age=120 max-stale[=86400]'
                        }
                    })

                    .then(res => {
                        const contactObject = res.data;
                        // const contacts = res.data.contacts;
                        const deals = res.data.deals;
                        const geoAddresses = res.data.geoAddresses;
                        setContactObject(contactObject);
                        setContacts(response.data);
                        setDeals(deals);
                        setGeoAddresses(geoAddresses);
                        console.log(contactObject);
                        
                        setLoaded(true);
                    })
                    .catch(error => console.log(error));
                
    }}, []);


    console.log(contactObject);
    
   

    // const contactData = contactId(contact);
    // console.log(contactData);
   
    // function contactName(contact) {
    //     let contact = contacts.map(contact => {
    //         return (
    //             contact.firstName
    //     )});
    //     return contact;
    // }
    
    // const contactNames = contactName(contact);
  
    // function contactDeal(deals) {
    //     let deal = deals.map(deal => {
    //         return ( 
    //             <div key={contactData}>
    //                <>{deal.value}</>
    //                <>{deal.currency}</>
    //             </div>
    //         );
    //     });
    //     return deal;
    // }

    // const contactDeals = contactDeal(deals);
    // console.log(contactDeals);
    // );
    // function contactGeoAddresses(geoAddresses) {
    //     let geoAddress = geoAddresses.map(geoAddress => {
    //         if (!geoAddress)
    //             return (
    //                 <div key={geoAddress.contact}>
    //                     <>{geoAddress.city}</>
    //                     <>{geoAddress.state}</>
    //                 </div>
    //             );
    //             else return (<>{null}</>);
    //     });
    //     return geoAddress;
    // }

    // const contactLocation = contactGeoAddresses(geoAddresses) 


    return (
            loaded && 
                        <tbody>
                            <tr key>
                                <Contacts 
                             />
                      
                            </tr>
                        </tbody>          
    )
}

export default Data;
