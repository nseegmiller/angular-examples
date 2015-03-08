angular-examples
================
The various branches of this repository demonstrate various AngularJS principles, many of which have been presented at a meetup or conference.

Animating Angular
* Video: https://www.youtube.com/watch?v=9s_9_ayzUl8 (ng-conf 2015 hacknight in March 2015)
* Branch: animating-angular
* Slides: http://slides.com/nickseegmiller/animating-angular
* Info: When asked about the best thing of Angular, many people are quick to point to
    its fantastic two-way binding feature. With ngAnimate, it is exceptionally easy
    to add a little spice to that great feature. I will show everyone how simple it is
    to get up and running with ngAnimate, demonstrate some of my favorite tips and tricks,
    and delve into some advanced strategies for combining CSS and JS animations using
    the GreenSock Animation Platform (GSAP).

ngAnimate with CSS and GreenSock
* Video: https://www.youtube.com/watch?v=rXeKZzJYuKI&t=32m20s (AngularJS Utah meetup May 2014)
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
* http://slides.yearofmoo.com/ng-conf-2015/index.html?now123#/0/0/
* https://docs.angularjs.org/api/ngAnimate
* http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html
* http://www.greensock.com/get-started-js/

Routes and promises
* http://docs.angularjs.org/api/ngResource/service/$resource
* http://docs.angularjs.org/api/ng/service/$q
* http://docs.angularjs.org/api/ngRoute/provider/$routeProvider

  
