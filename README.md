RoutesAndPromises
=================
This assumes you have Node already installed. Lots of resources for installing Node if you don't.

First, clone this repository.

Install gulp (used for the client code)
    npm install -g gulp
  
Install express (used for the server code)
    npm install -g express

In the RoutesAndPromies/server directory, run the following to setup the REST server (first time only):
    npm install
  
Then, start the REST server:
    node rest_api.js
  
In a separate terminal, in the RoutesAndPromies/client directory, run the following to setup the Angular app:
    npm install
  
Then, start serving the app:
    gulp
  

  
