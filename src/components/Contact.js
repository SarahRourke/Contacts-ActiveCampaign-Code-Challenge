import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Image from 'react-bootstrap/Image';


const Contact = (props) => {
    // const [contactId] = useState(...props.id) 
    const [contact, setContact] = useState(...props.id);
    // const [setContactData] = useState({})
    // const contact = useContext(contactData.contact);
    // const geoAddresses = useContext(contactData.geoAddresses)
    // [contacts, setContacts] = useContext({ContactContext})
    
    // const contactData = {
    //     contact: {
    //         firstName: "",
    //         lastName: ""
    //     },
    //     geoAddresses: {    
    //         city: "",
    //         state: "",
    //         country: ""
    //     },
    //     deals: {    
    //         deals: ""
    //         totalValue: ""
    //     },
    //     tags: { 
    //         tags: ""
    //     }
    // }
    
    // const ContactContext = 
    // createContext(contactData.contact);
    useEffect(() => {
        
        axios.get(`/contacts/${props.id}?limit=1`, {
            // headers: {
            //     'Api-Token': process.env.REACT_APP_API_TOKEN,
            //     'Cache-Control': 'max-age=120 public max-stale=[200]'
            // }
        })
        .then(res => res.data)
        .then(data => {
            setContact(data.contact)
            // console.log(data)
        })
        
    })

    return (
            <tr>
            <td className="text-center">
              <div className="form-check">
                <input className="form-check-input position-static" type="checkbox" value="" id="defaultCheck1" aria-label="...">
                </input>
            </div>
            </td>
            <td>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail />
             
            </td>
            <td>
              $Total Value
            </td>
            <td>
              City, State, Country
            </td>
            <td className="text-center">
              {/* {[deals.length]} */}
              {/* should be deals.length */}
            </td>
            <td>
              Tags
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
