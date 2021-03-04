import React from 'react';
import '../App.css';
import Image, { propTypes } from 'react-bootstrap/Image';
import Contact from './Contact';


// assumed deals column is in reference to the total number of all deals
// also, prefer using larger spacing for writing code - remember this on setup
// better way to write 'props.props'? sounds pretty dumb

const Contacts = (props) => {
  
  // returns 20 individual contact objects with firstName, lastName, and number of deals 
  console.log(props);
  // const { ...contact } = contacts; 
  // console.log(contact);



  
  
 return (

 <>
  
            
                <td className="text-center">
                    <input type="checkbox" value="">
                    </input>
                </td>
            
                <td className="names">
                 
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEPvvuhwVmeQk5SflMhusiojB5ud58g59Lw&usqp=CAU" roundedCircle thumbnail /> 
                <>{props.name}</>
                 
                
              </td>
            

                <td className="text-left"> 
                  {/* {props.totalValue}  */}
                </td>

                <td className="location">
                  {/* {props.location} */}
                </td>

                <td className="text-center">
                  {/* {props.deals} */}
                </td>
                  
                <td className="tags">
                  {/* {props.tags} */}
                </td> 
            </>
            
 )}

export default Contacts;