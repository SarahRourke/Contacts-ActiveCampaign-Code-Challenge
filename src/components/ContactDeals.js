import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';


const ContactDeals = ({...contact}) => {
    const [deals, setDeals] = useState({ ...contact})

    useEffect(() => {
        axios.get('/deals?limit=1', {
          headers: {
                'Api-Token': process.env.REACT_APP_API_TOKEN, 
                'Cache-Control': 'max-age=120 public max-stale[=300]'
            },
    })
    .then(res => {
        setDeals({

            deals : res.deals
        })
    })
    .catch(error => (error))
}, [deals.props]);   

    return (

        <tr>
            <td>
             {deals.props}
            </td>
        </tr>

    )

 
}

export default ContactDeals;