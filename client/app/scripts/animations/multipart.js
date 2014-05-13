'use strict';

angular.module('angular-examples.animations')
    .animation('.multipart-animation', ['TweenMax',
        function(TweenMax) {
            var time = 0.5;
            return {
                enter: function(element, done) {
                    TweenMax.fromTo(element, time, {opacity: 0}, {opacity: 1, onComplete: function() {
                        TweenMax.fromTo(element, time, {x: 0, rotationZ: 0}, {x: 200, rotationZ: 90, onComplete: function() {
                            TweenMax.fromTo(element, time, {y: 0}, {y: 200, onComplete: done});
                        }})
                    }});
                },
                leave: function(element, done) {
                    TweenMax.to(element, time, {opacity: 0, onComplete: done});
                }
            }
        }
    ])
    .animation('.lots-of-props', ['TweenMax',
        function(TweenMax) {
            var time = 2;
            return {
                enter: function(element, done) {
                    TweenMax.fromTo(
                        element,
                        time,
                        {
                            x: 0,
                            y: 0,
                            scaleX: 1,
                            scaleY: 1,
                            skewX: 0,
                            skewY: 0,
                            rotationZ: 0,
                            rotationY: 0
                        },
                        {
                            x: 200,
                            y: 300,
                            scaleX: 2,
                            scaleY: 3,
                            skewX: "5deg",
                            skewY: "10deg",
                            rotationY: 45,
                            rotationZ: 30,
                            onComplete: done
                        }
                    );
                },
                leave: function(element, done) {
                    TweenMax.to(element, 0.5, {opacity: 0, onComplete: done});
                }
            }
        }
    ])
;
