'use strict';

var animationTime = .3;
angular.module('angular-examples.animations')
    .animation('.slide-and-fade-left', ['TweenMax',
        function(TweenMax) {
            return {
                enter: function(element, done) {
                    var blockWidth = element.outerWidth();
                    TweenMax.set(element, {position: 'absolute'});
                    TweenMax.fromTo(element, animationTime, {opacity: 0, x: blockWidth}, {opacity: 1, x: 0, onComplete: done});
                },
                leave: function(element, done) {
                    var blockWidth = element.outerWidth();
                    TweenMax.set(element, {position: 'absolute'});
                    TweenMax.fromTo(element, animationTime, {opacity: 1, x: 0}, {opacity: 0, x: blockWidth * -1, onComplete: done});
                }
            }
        }
    ])
    .animation('.slide-and-fade-right', ['TweenMax',
        function(TweenMax) {
            return {
                enter: function(element, done) {
                    var blockWidth = element.outerWidth();
                    TweenMax.set(element, {position: 'absolute'});
                    TweenMax.fromTo(element, animationTime, {opacity: 0, x: blockWidth * -1}, {opacity: 1, x: 0, onComplete: done});
                },
                leave: function(element, done) {
                    var blockWidth = element.outerWidth();
                    TweenMax.set(element, {position: 'absolute'});
                    TweenMax.fromTo(element, animationTime, {opacity: 1, x: 0}, {opacity: 0, x: blockWidth, onComplete: done});
                }
            }
        }
    ])
    .animation('.slide-and-fade-up', ['TweenMax',
        function(TweenMax) {
            return {
                enter: function(element, done) {
                    var blockHeight = element.outerHeight();
                    TweenMax.set(element, {position: 'absolute'});
                    TweenMax.fromTo(element, animationTime, {opacity: 0, y: blockHeight}, {opacity: 1, y: 0, onComplete: done});
                },
                leave: function(element, done) {
                    var blockHeight = element.outerHeight();
                    TweenMax.set(element, {position: 'absolute'});
                    TweenMax.fromTo(element, animationTime, {opacity: 1, y: 0}, {opacity: 0, y: blockHeight * -1, onComplete: done});
                }
            }
        }
    ]);



