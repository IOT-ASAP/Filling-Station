// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(() => {
    var currentPosition = document.getElementById('getCurrentPosition'),
        destinationPosition = document.getElementById('getDestinationPosition'),
        getRouteButton = document.getElementById('getRoute');

    getRouteButton.addEventListener('click', calculateAndDisplayRoute, false);
    currentPosition.addEventListener('click', getUserPosition, false);
    destinationPosition.addEventListener('click', () => {
      destinationIsAvaliable = true;
    }, false);

    map.addListener('click', function(event) {
      if(destinationIsAvaliable){
        getDestinationPosition(event.latLng);
      }
      destinationIsAvaliable = false;
    });

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

var map, routePoints = {}, bounds;
var markerCoordinates = {};
var directionsDisplay, directionsService;
var destinationIsAvaliable = false;
var MarkerIcons = {
  origin: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
  destination: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
};

function initMap() {
  directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true
  });
  directionsService = new google.maps.DirectionsService;
  map = new google.maps.Map(document.getElementById('mapWrapper'), {
    center: {lat: 49.279794, lng: 31.5559733},
    zoom: 6
  });
  directionsDisplay.setMap(map);
  bounds = new google.maps.LatLngBounds();
}

function computeNumericValues(route){
  document.getElementById('distance').innerHTML = route.legs[0].distance.text;
  document.getElementById('duration').innerHTML = route.legs[0].duration.text;
}

function getCoordinates(callback){
  var location = navigator.geolocation;
  if (location) {
    location.getCurrentPosition(function(position){
      callback.call(position);
    }, function(){
      console.log('Error: The Geolocation service failed.');
    });
  } else {
    console.log('Error: Your browser doesn\'t support geolocation.');
  }
}

function getMarkerCoordinates(key){
  return {
    lat: routePoints[key].getPosition().lat(),
    lng: routePoints[key].getPosition().lng()
  };
}

function getUserPosition(){
  getCoordinates(function(){
    var _this = this;
    var pos = {
      lat: _this.coords.latitude,
      lng: _this.coords.longitude
    };
    var coordinates = setMarkerOnMap(pos, 'Your location', 'origin');

    var posCoordinates= new google.maps.LatLng(coordinates.lat, coordinates.lng);
    bounds.extend(posCoordinates);
    map.fitBounds(bounds);

    getFormattedAddress(coordinates, function(){
      document.getElementById('startAddress').innerHTML = this;
    });
  });
}

function getDestinationPosition(pos){
  var coordinates = setMarkerOnMap(pos, 'Destination', 'destination');

  var posCoordinates= new google.maps.LatLng(coordinates.lat, coordinates.lng);
  bounds.extend(posCoordinates);
  map.fitBounds(bounds);
  getFormattedAddress(coordinates, function(){
    document.getElementById('finishAddress').innerHTML = this;
  });
}

function getFormattedAddress(pos, callback){
  var request = new XMLHttpRequest(),
      url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
      url += pos.lat + ',' + pos.lng;
      url += '&key=AIzaSyDsiKb2ZnfXxmWfEMsR3bnvf56x-mQKIX0&language=en';

  request.open('GET', url, true);
  request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
      var data = JSON.parse(request.responseText);
      var address = data.results[0];
      callback.call(address.formatted_address);
    }
  };
  request.send();
}

function setMarkerOnMap(location, title, key){
  if(typeof routePoints[key] !== 'undefined'){
    routePoints[key].setMap(null);
  }
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: title,
    icon: MarkerIcons[key]
  });

  routePoints[key] = marker;
  markerCoordinates[key] = {
    lat: marker.getPosition().lat(),
    lng: marker.getPosition().lng()
  };
  return markerCoordinates[key];
}

function calculateAndDisplayRoute() {
  if(markerCoordinates.origin && markerCoordinates.destination){
    routePoints.origin.setMap(null);
    routePoints.destination.setMap(null);
    routePoints = {};
    directionsService.route({
      origin: markerCoordinates.origin,
      destination: markerCoordinates.destination,
      travelMode: google.maps.TravelMode.WALKING
    }, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);

        computeNumericValues(response.routes[0]);
      } else {
        console.log('Directions request failed due to ' + status);
      }
    });
  } else {
    alert('Please, put all points on the map.');
  }
}
