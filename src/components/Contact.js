import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import ContactTags from './ContactTags';
import Image from 'react-bootstrap/Image';

// assumed deals column is in reference to the total number of all deals
// also, prefer using larger spacing for writing code - remember this on setup
// better way to write 'props.props'? sounds pretty dumb

const Contact = (props) => {
   
    const [contact, setContact] = useState(props.props);
    const [deals, setDeals] = useState([]);
    const [geoAddresses, setGeoAddresses] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        
        axios.get(`https://cors-anywhere.herokuapp.com/sahmed93846.api-us1.com/api/3/contacts/${props.props}`, {
            headers: {
                'Api-Token': process.env.REACT_APP_API_TOKEN,
                'Cache-Control': 'max-age=120 public max-stale=[200]'
            },
        }
        )
        .then(res => res.data)
        .then(data => {
           
            setContact(data.contact)
            setDeals(data.deals) 
            setGeoAddresses(data.geoAddresses) 
            setLoaded(true)
            console.log(data)
           
        })
        .catch(error => console.log(error))
    }, [props.props], [deals], [geoAddresses])


    return (
      loaded && 
          
            <tr>
              <td className="text-center">
                <div className="form-check">
                  <input className="form-check-input position-static"         type="checkbox" value="" id="defaultCheck1" aria-label="...">
                  </input>
                </div>
              </td>
              
              <td className="names">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail />
              
                {contact.firstName + ' '} 
                {contact.lastName}
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

              <td className="tags">
                <ContactTags props={contact.id} />
              </td>
          </tr>

        )
}
export default Contact;