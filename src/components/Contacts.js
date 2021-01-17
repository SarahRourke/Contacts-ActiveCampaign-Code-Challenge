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
        axios.get('/contacts', {
            headers: {
                //this env variable will be set during deploykent so apiKey is not bundled with rest of app code
                'Api-Token': process.env.REACT_APP_API_TOKEN
            },
        })
        .then(res => {
            console.log(res.data.contacts)
            this.setState({
                contacts : res.data.contacts,
                dataLoaded : true
            })
        }).catch(error => console.log(error));
    }

    render() {
        return (
                <tbody>
                        {this.state.contacts.map(contact => (
                            <ContactData key={contact.id} contact={contact}/>
                        ))}
                </tbody>
        )
    }

}

export default Contacts;