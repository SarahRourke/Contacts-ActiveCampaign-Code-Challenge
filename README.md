
# Contacts 
### A Simple React App for ActiveCampaign Code Challenge January 2021

Contacs is a simple front-end react app intended for rendering 'Contacts' as an indexed list from an example ActiveCampaign employee account using RESTful APIs. Built with the assumption that much of the information is incomplete.

App loads with limited data due to cors/api limitations. Currenty trouble shooting.


ReactJS, JavaScript, Node v15.6.0, npm 7.4.0, React-Bootstrap and basic CSS styling.

Built using create-react-app and relies on the outsourced (see below) cors-anywhere app as a cors work-around. This does limit the number of Api calls the app can make within a certain amount of time, 50 calls within at least 20 minutes. I am working on configuring cors-anywhere so I may whitelist my app's domain to allow unlimited calls - but building an Express server may be the best option. 
  
Includes 4 GET calls to the endpoints;
    '/contacts'
    '/contacts/id'
    '/contacts/id/contactTags'
    '/tags/id'

The live app can be viewed here:
https://shielded-spire-74256.herokuapp.com/

The repo on github here:
    https://github.com/SarahRourke/Contacts-ActiveCampaign-Code-Challenge

Source code for cors-anywhere can be found here;
      https://cors-anywhere.herokuapp.com/

### Dependencies

axios ^0.21.1
dotenv ^8.2.0
prop-types ^15.7.2
react-bootstrap ^1.4.3
serve ^11.3.2

## Installation and Usage
 -For local development env

Requires: Node.js (v15.6.0), npm v7.4.0

To run the app locally clone github repo onto local machine and run;
 
    npm init

Set egines for the lastes npm and node versions in your package.json (for official build/deployment on heroku);

Obtain an Api-Token (assuming this was accessable to public). 
Set this as your 'Api-Token': process.env.REACT_APP_API_TOKEN
under headers and create a new .env file in the root of your porject and define the api-token there. - only for local developement. React will store api-token and make visible in the build bundle. 

When ready, in the terminal run;

    npm run dev

the app should open in your default browser on localhost:3000.


This is the third build of the apps code. I attempted more complicated use of hooks because I find the number of api calls unnecessary. 
