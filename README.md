angular-examples
================
The various branches of this repository demonstrate various AngularJS principles, many of which have been presented at a meetup or conference.

ngAnimate with CSS and GreenSock
* Video: TBA (AngularJS Utah meetup May 2014)
* Branch: ng-animate
* Info: Refresher on using ngAnimate with CSS as well as how to use it with GreenSock (GSAP)

Routes and promises
* Video: https://www.youtube.com/watch?v=oCzWIlGDICk (AngularJS Utah meetup Mar 2014)
* Branch: routes-and-promises
* Info: Demonstrates how to use promises in your Angular routes

Controller inheritance
* Branch: controller-inheritance
* Info: Demostrates a very simple way to use inheritence in your angular controllers

Setup to run the examples
=========================
This assumes you have Node already installed. Lots of resources for installing Node if you don't.

First, clone this repository.

Optionally install the live reload extension for Chrome

https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei

Install gulp (used for the client code)

    npm install -g gulp
  
Install express (used for the server code)

    npm install -g express

In the angular-examples/server directory, run the following to setup the REST server (first time only)

    npm install
  
Then, start the REST server

    node rest_api.js
  
In a separate terminal, in the angular-examples/client directory, run the following to setup the Angular app

    npm install
  
Then, start serving the app

    gulp
  
Finally, visit http://localhost:3000 in your web browser
  
# References
ngAnimate
* https://docs.angularjs.org/api/ngAnimate
* http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html
* http://www.greensock.com/get-started-js/

Routes and promises
* http://docs.angularjs.org/api/ngResource/service/$resource
* http://docs.angularjs.org/api/ng/service/$q
* http://docs.angularjs.org/api/ngRoute/provider/$routeProvider

  
