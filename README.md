
Contacts - Simple React App for ActiveCampaign code challenge

Utilizes:



Contacts from example ActiveCampaign employee account that are called using RESTAPIs; assuming much of the information is incomplete. 

    This includes 4 GET calls to the endpoints;
    '/contacts'
    '/contacts/id'
    '/contacts/id/contactTags'
    '/tags/id'

The live app can be viewed here:
https://shielded-spire-74256.herokuapp.com/

The repo on github here:
https://github.com/SarahRourke/Contacts-ActiveCampaign-Code-Challenge

To run the app locally clone github repo onto local machine;
 
    run npm init

Set egines for the lastes npm and node versions in your package.json (for official build/deployment on heroku);

obtain an Api-Token (if this was accessable to public),

Set this as your 'Api-Token': process.env.REACT_APP_API_TOKEN
under headers and create a new .env file in the root of your porject and define the api-token there. - only for local developement. React will storeapi toekn in the build bundle. 

When ready, run;

    npm run dev

and the app should open in your default browser on localhost:3000

This is the third build of the apps code. I attempted more complicated use of hooks because I find the number of api calls unnecessary. 