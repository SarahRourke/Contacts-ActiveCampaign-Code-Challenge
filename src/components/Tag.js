import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';


const Tag = (props) => {
    
    const [tag, setTag] = useState([props.props])
    const [loaded, setLoaded] = useState(false)
    console.log(tag)
    useEffect(() => {
        // adding https:// to api url to see its effects on api calls
        axios.get(`https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/tags/${props.props}`, {
            headers: {
                'Api-Token' : process.env.REACT_APP_API_TOKEN,
                'Cache-Control' : 'max-age=2 public max-stale=[86400]'
            },
        }
        )
        .then(res => res.data)
        .then(data => {
            setTag(data.tag)
            setLoaded(true)
        
        })
        .catch(error => console.log(error))
    }, [props.props])

    return (
        loaded && 
        <>
        {tag.tag + ', '}
        </>
    )
}

export default Tag;