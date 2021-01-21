import React from 'react';
import Image from 'react-bootstrap/Image';
import '../avatar.png';
import ContactDeals from './ContactDeals';


const ContactName = (...contact) => {
    contact = {contact}
    // definitely refactorec this function for far too long. But actively learned and researched a ton. Twas fun. 
    // console.log({conta
  
    return (
        <tr>
              <td className="text-center">
                <div className="form-check">
                  <input className="form-check-input position-static" type="checkbox" value="" id="defaultCheck1" aria-label="..."></input>
                </div>
              </td>
              <td>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail />
                
                {contact.firstName} {contact.lastName}
                
              </td>
              <td>
                $Total Value
              </td>
             
                <td>
                  
                , State, Countr
              </td>
            
              
              <td className="text-center">
              {/* <ContactDeals props={contact}/> */}
                                
              </td>
              <td>
                Tags
              </td>
            </tr>
    )
}

export default ContactName;