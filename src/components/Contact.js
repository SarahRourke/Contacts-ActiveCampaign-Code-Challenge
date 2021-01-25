import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import ContactTags from './ContactTags';
import Image from 'react-bootstrap/Image';

// assumed deals column is in reference to the total number of all deals


const Contact = (props) => {
    console.log(props)
    const [contact, setContact] = useState(props.props);
    const [deals, setDeals] = useState([]);
    const [geoAddresses, setGeoAddresses] = useState([]);
    const [contactTags, setContactTags] = useState(contact.id)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        
        axios.get(`/contacts/${props.props}`, {
            headers: {
                'Api-Token': process.env.REACT_APP_API_TOKEN,
                'Cache-Control': 'max-age=120 public max-stale=[200]'
            },
        })
        .then(res => res.data)
        .then(data => {
           
            setContact(data.contact)
            setDeals(data.deals) 
            setGeoAddresses(data.geoAddresses)
            setContactTags(props.cotactTags)
            
            setLoaded(true)

            
           
           
        })
        .catch(error => console.log(error))
    }, [props.props], [], [], [])


    return (

      loaded && 
        
          
            <tr>
            <td className="text-center">
              <div className="form-check">
                <input className="form-check-input position-static" type="checkbox" value="" id="defaultCheck1" aria-label="...">
                </input>
            </div>
            </td>
            <td>
             <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail />
             
             {contact.firstName} {contact.lastName}
            </td>
            <td className="text-left">
              
              {deals.map(deals => (
                (new Intl.NumberFormat('en-US', { style: 'currency', currency: (deals.currency), maximumFractionDigits: 0}).format(deals.value)+ ' '
              )))}
              
            </td>
            <td>
              {!geoAddresses || 
              [geoAddresses.map(geoAddresses => (
                geoAddresses.city +  ', ' + 
                geoAddresses.state + ', ' + 
                geoAddresses.country2))]}
            </td>
            <td className="text-center">
             {contact.deals.length}
            </td>
            <td>
              <ContactTags props={contact.id} />
            </td>
          </tr>

        )
}
export default Contact;

        
                
                        
        // return (
        //             <ContactContext.Provider value={contacts,contact}>
        //             <ContactList />
        //             </ContactContext.Provider>
                
                    
        // )
            
        // }
    

    // function ContactList(props) {
    //     return (
    //         <div>
    //             <ContactRow />
    //         </div>
    //     );
            
    // }

    // function ContactRow() {
    //     const contact = useContext(ContactContext);

    //     return (
    //         <ContactRow key={{contact}}/>
    //     )}
    //             {firstName: contact.firstName}
    //             {lastName: contact.lastName}
    //             {city: contact.city}
    //             {state: contact.state}
    //             {country: contact.country}
    //             {deals : contact.deals}
    //             {totalValue: contact.totalValue}
    //             {tags: contact.tags}
