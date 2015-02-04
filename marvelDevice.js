/**********************************************************
/*
/* Marvel devices directive
/* Edward Russell 2015
/*
/*
/* Licenced under the MIT licence
/*
/*
/*
**********************************************************/

(function () {

'use strict';

var module = angular.module('marveldevices', []);

module.directive('marvelDevice', function () {
    return {
      templateUrl: 'marvelDevice.html',
      restrict: 'EA',
      scope: {
      	image: '@',
      	mobileAlt: '@',
        deviceType: '@',
        colour: '@',
        orientation: '@'
      },
      link: function (scope) {

        // Inits

        var type = scope.deviceType || 'iphone6';
        var topBar=false, sleep=false, home=false, bottomBar=false, volume=false, sensor=false, speaker=false;

        // Conditionally enter the correct elements for the different devices

        if (type !== 'ipad') {topBar=true;}
        if (type !== 'ipad' && type !== 'htc-one' && type !== 'lumia920') {sleep=true;}
        if (type !== 'ipad' && type !== 'htc-one' && type !== 's5') {volume=true;}
        if (type !== 'ipad' && type !== 'nexus5' && type !== 'lumia920') {sensor=true;}
        if (type !== 'ipad' && type !== 'nexus5') {speaker=true;}
        if (type !== 'nexus5' && type !== 'lumia920' && type !== 'htc-one') {home=true;}
        if (type !== 'ipad' && type !== 's5' && type !== 'nexus5' &&
            type !== 'lumia920' && type !== 'htc-one') {bottomBar=true;}

        // Public vars

      	scope.alt = scope.mobileAlt;
        scope.type = type;
        scope.topBar = topBar;
        scope.sleep = sleep;
        scope.home = home;
        scope.bottomBar = bottomBar;
        scope.volume = volume;
        scope.sensor = sensor;
        scope.speaker = speaker;
      }
    };
  });
})();