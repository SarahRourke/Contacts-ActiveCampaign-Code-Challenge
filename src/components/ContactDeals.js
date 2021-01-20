import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ContactDeals = (...contact) => {
    const [deals, setDeals] = useState({...contact })

    useEffect(() => {
        axios.get('/deals=limit1', {
          headers: {
                'Api-Token': process.env.REACT_APP_API_TOKEN, 
                'Cache-Control': 'max-age=120 public max-stale[=300]'
            },
    })
    .then(res => {
        setDeals({

            deals : res.data.deals
        })
    })  

    return (
        <tr>
            <td>
                {deals.id}
            </td>
        </tr>

    )

    })

 
}

export default ContactDeals;