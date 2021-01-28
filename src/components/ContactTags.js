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
        axios.get(`/contacts/${props.props}/contactTags`, {
            headers: {
                'Api-Token': process.env.REACT_APP_API_TOKEN,
                'Cache-Control' : 'max-age=2 public max-stale=[86400]',
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