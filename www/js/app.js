// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicApp = angular.module('starter', ['ionic','ngCordova'])

ionicApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

ionicApp.controller('myCtrl', function($scope, $cordovaContacts,$cordovaSms){


  $scope.contact = function() { 

  $cordovaContacts.pickContact().then(function(result){
$scope.contacts = result;
 $scope.num = $scope.contacts.phoneNumbers[0].value;

  }, function(error){
    console.log("Error: " + error);
  });
  }

  $scope.send = function() {

  
   //$cordovaContacts.pickContact();

   $cordovaSms
     .send( $scope.num , $scope.text , options)
     .then(function(){

      //success
     // return $scope.num = "sms send";
      alert('success');

     }, function(error){
      // error

      //return $scope.mgs = "Error sending sms";
      alert('error: ' + error);
     });

  }

  $scope.alert = function(){
    alert('Alert button is working');
  }


});

/*
var app = {
    

sendSms: function() {
var messageInfo = {
    phoneNumber: "9460572902",
    textMessage: "This is a test message"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    alert("code: " + error.code + ", message: " + error.message);
});
}


};

*/
var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        alert(number);
        alert(message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.sendMessage(number, message, options, success, error);
    }
};