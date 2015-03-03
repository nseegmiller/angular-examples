'use strict';

angular.module('angular-examples.animations')
    .animation('.mixed', ['TweenMax',
        function(TweenMax) {
            var transitionTime = 0.5;
            return {
                enter: function(element, done) {
                    TweenMax.fromTo(element, transitionTime, {scale: 1, x: 0, y: 0}, {scale: 2, x: element.width(), y: element.height(), onComplete: done});
                },
                leave: function(element, done) {
                    TweenMax.to(element, transitionTime, {scale: 1, x: 0, y: 0, onComplete: done});
                }
            }
        }
    ])
;
