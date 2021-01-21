import { useState, useEffect, useReducer } from 'react';
import '../App.css';
import axios from 'axios';
import Image, { propTypes } from 'react-bootstrap/Image';
import ContactName from './ContactName';
import ContactDeals from './ContactDeals';


const Contacts = () => {
    const[contacts, setContacts] = useState([  ])
    const[data, setData] = useState({  })
    const[contact, setContact] = useReducer( dispatchEvent( !data, true ) )

    useEffect(() => {
        
        axios.get('/contacts?limit=1',  {
        
            headers: {
                // this env variable will be set during deploykent so apiKey is not bundled with rest of app code
                'Api-Token': process.env.REACT_APP_API_TOKEN, 
                'Cache-Control': 'max-age=120 public max-stale[=300]'
            }}) 
            .then(res => 
                setContacts( res.data.contacts.map((contact => {
                return axios.get(`/contacts/${contact.id}?limit=1`, {
                    headers: {
                        'Api-Token': process.env.REACT_APP_API_TOKEN,
                        'Cache-Control': 'max-age=120 public max-stale[=300]'
                    }
                })
                .then(res => setData(res.data),
                             setContacts(res.data),
                             setContact(res.data.contact)   ,
                        console.log(setData)
                )}
                )
            ))
            )
            .catch(error => console.log(error))
            }, [])
        
        
    

    
 
    return (
        <tbody>
                     <tr>
              <td className="text-center">
                <div className="form-check">
                  <input className="form-check-input position-static" type="checkbox" value="" id="defaultCheck1" aria-label="..."></input>
                </div>
              </td>
              <td>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail />
                
            {/* {contact.firstName} {contact.lastName} */}
              </td>
               
              <td>
                total value
                {contacts.firstName}
                
              </td>
            
                <td>
                  
                , State, Countr
              </td>
            
              
              <td className="text-center">
            
              {[contacts.deals].length}
                                
              </td>
              <td>
                Tags
              </td>
            </tr>
                </tbody>
    )
    

}

export default Contacts;