var phonegapReady = function() {
    //   oStatus = document.getElementById("connectionStatus");
    // oStatus.innerHTML = "Now connected to phonegap";
    //oStatus.style.color = "green";
}

document.addEventListener("deviceready", phonegapReady, false);

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller("takePicture", function($scope, $http) {

    $scope.takePhoto = function() {

        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    var onPhotoDataSuccess = function(imageData) {

        var smallImage = document.getElementById('smallImage');
        // Unhide image elements
        //
        smallImage.style.display = 'block';
        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        smallImage.src = "" + imageData;
        console.log(smallImage.src);
    }
    var onFail = function(message) {
        alert('Failed because: ' + message);
    }

})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})