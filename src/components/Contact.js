import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import ContactTags from './ContactTags';
import Image from 'react-bootstrap/Image';
import Deals from './Deals';

// assumed deals column is in reference to the total number of all deals
// also, prefer using larger spacing for writing code - remember this on setup
// better way to write 'props.props'? sounds pretty dumb

function Contact(props) {
  console.log(props)


  const contact = props.contact
  const deals = props.deals
  // console.log(deals)
  // console.log(contact)
  const dealsKey = () => {
    const contactKey = contact.id
    const dealId = deals.contact
    if (contactKey === dealId) {
      return deals.id
    }
    else {return null}
  }


  // const contact = {
  //   contacts: [
  //     props.contacts.id,
  //     console.log(props.contacts.contact.id)
  //   ]
  // }
  // console.log(props.contacts.contacts.map(contact => (
  //   contact.id
    
  // )))
   
    
  // const contactFullName = props.contact.firstName + ' ' + props.contact.lastName

  // const contactDealsValue = props.deals.map(deal => (
  //   <Deals key={deal.contact} deal={deal.value}/>
  // ))
 
  // const contactDeals = props.contact.deals.length
  
    return (
      // loaded && 
          
            <tr>
              
              <td className="text-center">
                
                  <input type="checkbox" value="">
                  </input>
              
              </td>
              
              <td className="names">
                
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail />
                {contact.firstName + ' ' + contact.lastName}
              </td>

               <td className="text-left">
                 {/* {contactDealsValue} */}
               {/* {deals.map(deals => (
                 <Deals key={dealsKey} deals={deals}/>
               ))} */}
               
                {/* {props.deals.map(deals => (
                  (new Intl.NumberFormat('en-US', { style: 'currency', currency: (deals.currency), maximumFractionDigits: 0}).format(deals.value)+ ' '
                )))} */}
                
              </td>

              <td>
                
                {/* {!props.contact.geoAddresses || 
                [props.contact.geoAddresses.map(geoAddresses => (
                  geoAddresses.city +  ', ' + 
                  geoAddresses.state + ', ' + 
                  geoAddresses.country2))]} */}
              </td>

              <td className="text-center">
                {contact.deals.length}
              </td>

              {/* <td className="tags">
                <ContactTags props={contact.id} />
              </td>  */}
          </tr>

        )
    
}
export default Contact;