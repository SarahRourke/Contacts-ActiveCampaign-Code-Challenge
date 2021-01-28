import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tag from './Tag';
import '../App.css';

const ContactTags = (props) => {
   
    const [tags, setTags] = useState([props.props])
    const [loaded, setLoaded] = useState(false)
    console.log(tags)
    useEffect(() => {
        // adding https:// to api url to see its effects on api calls
        axios.get(`https://sahmed93846.api-us1.com/api/3/contacts/${props.props}/contactTags`, {
            headers: {
                'Api-Token' : process.env.REACT_APP_API_TOKEN,
                'Content-Type' : 'application/json',
                'Origin' : 'https://shielded-spire-74256.herokuapp.com',
                // still figuring out cors config and how to best set headers and the settings' effects on data rendering/api calls
                'Cache-Control' : 'max-age=2 public max-stale=[86400]',
                // not sure if adding following line does anything...
                'Credentials' : 'include'
            },
        }
        )
        .then(res => res.data)
        .then(data => {
            
            setTags(data.contactTags)
            setLoaded(true)
        })
        .catch(error => console.log(error))
    }, [props.props])


    return (
    
        loaded && 
            <>
            {tags.map(tags => (
                <Tag key={tags.tag} props={tags.tag} />

            ))}
            </>
    )

}

export default ContactTags;