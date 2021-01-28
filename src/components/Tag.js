import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';


const Tag = (props) => {
    
    const [tag, setTag] = useState([props.props])
    const [loaded, setLoaded] = useState(false)
    console.log(tag)
    const url = `https://sahmed93846.api-us1.com/api/3/tags/${props.props}`
    const cache = {};
    useEffect(() => {
        // adding https:// to api url to see its effects on api calls
        if (cache[url]) {
            const data = (cache[url]);
            setTag(data.tag);
            setLoaded(true);
        } else {
        axios.get(url, {
            headers: {
                'Api-Token' : process.env.REACT_APP_API_TOKEN,
                'Content-Type' : 'application/x-www-form-urlencoded',
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
            cache[url] = data;
            setTag(data.tag);
            setLoaded(true);
        
        })
    
    
        .catch(error => console.log(error));}}, [])


    return (
        loaded && 
        <>
        {tag.tag + ', '}
        </>
    )
}

export default Tag;