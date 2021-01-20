import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ContactName from './ContactName';
import ContactDeals from './ContactDeals';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            dataLoaded: false
        };
    }

    componentDidMount() {
        this.getContacts();
    }

    getContacts = () => {
        // call to retrieve list of all contacts
        axios.get('/contacts?limit=5', {
            headers: {
                // this env variable will be set during deploykent so apiKey is not bundled with rest of app code
                'Api-Token': process.env.REACT_APP_API_TOKEN, 
                'Cache-Control': 'max-age=120 public max-stale[=300]'
            },
        })
        .then(res => {
            console.log(res.data.contacts); 
            this.setState({
                
                contacts : res.data.contacts,
                dataLoaded : true
                
            }) 
        }) 
        .catch(error => console.log(error))
    };

    render() {
        return (
                <tbody>
                    
                        {this.state.contacts.map((contact => (
                           <> <ContactName key={contact.id} props={contact}/> 

                        <ContactDeals key={contact.id} props={contact} />
                        </>
                        )))}
                </tbody>
    )}
    

}

export default Contacts;