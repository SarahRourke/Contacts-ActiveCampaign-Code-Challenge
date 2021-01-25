import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';


const Tag = (props) => {
    
    const [tag, setTag] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/sahmed93846.api-us1.com/api/3/tags/${props.props}?limit=1`
        // , {
        //     headers: {
        //         'Api-Token' : process.env.REACT_APP_API_TOKEN,
        //     }
        // }
        )
        .then(res => res.data)
        .then(data => {
            setTag(data.tag)
            setLoaded(true)
            
        })
        .catch(error => console.log(error))
    }, [])

    return (
        loaded && 
        <>
        {tag.tag + ', '}
        </>
    )
}

export default Tag;