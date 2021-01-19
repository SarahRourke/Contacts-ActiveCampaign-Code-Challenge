import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Image from 'react-bootstrap/Image';
import '../avatar.png';


const ContactData = (props) => {
    const [contact, setContact] = useState([ ...props.contact.id ]);
    // const [deals, setDeals] = useState( [] );
    // const [geoAddresses, setGeoAddresses] = useState( [] )
    useEffect(() => {
       axios.get(`/contacts/${props.contact.id}?limit=1`, {
            headers: {
                //this env variable will be set during deploykent so apiKey is not bundled with rest of app code
                'Api-Token': process.env.REACT_APP_API_TOKEN,
          
              
                'Cache-Control': 'max-age=120 public max-stale[=300]'
          }
        })
        .then(res => {
        
            setContact( 
              
               res.data.props
              //  {props:[res.data.props]},
                // {props:[res.data.deals]}
              )
              console.log([{contact}])
              console.log(props.contact.deals)
              console.log(props)
              // console.log([{deals}]);
        })
 
          
          .catch(error => console.log(error))
            
          
        }, [props.contact.id])
  
    return (
        <tr>
              <td className="text-center">
                <div className="form-check">
                  <input className="form-check-input position-static" type="checkbox" value="" id="defaultCheck1" aria-label="..."></input>
                </div>
              </td>
              <td>
                {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail /> */}
                {props.contact.firstName} {props.contact.lastName} 
              </td>
              <td>
                $Total Value
              </td>
             
                <td>
                  {props.contact.value}
                , State, Countr
              </td>
            
              
              <td className="text-center">
                {/* {[deals.length]} */}
                {/* should be deals.length */}
                {/* {deals.length} */}
              </td>
              <td>
                Tags
              </td>
            </tr>
        )
}

export default ContactData;