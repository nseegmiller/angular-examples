'use strict';

angular.module('angular-examples.animations')
    .animation('.fade-in-out', ['TweenMax',
        function(TweenMax) {
            var fadeTime = 0.3;
            return {
                removeClass: function(element, className, done) {
                    if (className === 'ng-hide') {
                        element.removeClass('ng-hide');
                        TweenMax.fromTo(element, fadeTime, {opacity: 0}, {opacity: 1, onComplete: done});
                    }
                    else {
                        done();
                    }
                },
                enter: function(element, done) {
                    TweenMax.fromTo(element, fadeTime, {opacity: 0}, {opacity: 1, onComplete: done});
                },
                beforeAddClass: function(element, className, done) {
                    if (className === 'ng-hide') {
                        TweenMax.to(element, fadeTime, {opacity: 0, onComplete: done});
                    }
                    else {
                        done();
                    }
                },
                leave: function(element, done) {
                    TweenMax.to(element, fadeTime, {opacity: 0, onComplete: done});
                }
            }
        }
    ])
;
