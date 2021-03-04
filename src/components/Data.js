import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Image, { propTypes } from 'react-bootstrap/Image';
import Contacts from './Contacts';
import ContactTags from './ContactTags';


const Data = (props) => {
    // const [contactObject, setContactObject] = useState([ ]);
    const [contacts, setContacts] = useState([]);
    // const [deals, setDeals] = useState([]);
    // const [geoAddresses, setGeoAddresses] =  useState([]);
    // const [loaded, setLoaded] = useState(false);
    

    
    useEffect(() => {
      
            // contacts?
            
                 axios.get('https://scer-cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts?include=deals,geoAddresses,contactTags', {
                        headers: {
                            'Api-Token' : process.env.REACT_APP_API_TOKEN,
                            'Cache-Control' : 'max-age=120 max-stale[=86400]'
                        }
                    })
                    .then(
                        res => {
                            console.log(res.data)
                            setContacts(res.data)
                        }
                    )
                        
                    
                    .catch(error => console.log(error));
                
    }, [contacts]);


    console.log(contacts);
    
   

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
        <div>
                    {contacts && contacts.map(contact => (
                        return 
                            contact.id

                    ))
                        
                    ;
                        <tbody>
                            <tr key>
                                <Contacts 
                             />
                      
                            </tr>
                        </tbody> 
        </div>         
    )
}

export default Data;
