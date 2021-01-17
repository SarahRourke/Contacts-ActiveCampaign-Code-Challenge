import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ContactData from './ContactData';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            dataLoaded: false
        }
    }

    componentDidMount() {
        this.getContacts();
    }

    getContacts = () => {
        // call to retrieve list of all contacts
        axios.get('https://sahmed93846.api-us1.com/api/3/contacts', {
            headers: {
                //this env variable will be set during deploykent so apiKey is not bundled with rest of app code
                'Api-Token': process.env.REACT_APP_API_TOKEN,
                'Cache-Control': 'max-age=120'
            },
        })
        .then(res => {
            this.setState({
                contacts : res.data.contacts,
                dataLoaded : true
            })
        }).catch(error => console.log(error));
    }

    render() {
        return (
                <tbody>
                        {this.state.contacts.map((contact => (
                            <ContactData key={contact.id} contact={contact}/>
                        )))}
                </tbody>
        )
    }

}

export default Contacts;