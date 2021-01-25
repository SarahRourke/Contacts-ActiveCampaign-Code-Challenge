import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tag from './Tag';

const ContactTags = (props) => {
   
    const [tags, setTags] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`/contacts/${props.props}/contactTags`, {
            headers: {
                'Api-Token': process.env.REACT_APP_API_TOKEN,
                'Cache-Control' : 'max-age=12 public max-stale[=200]'
            }
        })
        .then(res => res.data)
        .then(data => {
            setTags(data.contactTags)
            setLoaded(true)
        })
        .catch(error => console.log(error))
    }, [])

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