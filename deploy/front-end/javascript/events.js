EventHandler.on({
  action: 'click',
  attr: 'data-load-page'
}, function(event, target, attr){
  var value = target.getAttribute(attr),
      mapScriptTag = document.getElementById('mapScript');

  if(value == 'map'){
    mapScriptTag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDsiKb2ZnfXxmWfEMsR3bnvf56x-mQKIX0&callback=initMap');
  } else {
    mapScriptTag.setAttribute('src', '');
  }
  Ajax.page(target.getAttribute(attr), function(){
    globalWrapper.innerHTML = this;
  });
});

EventHandler.on({
  action: 'click',
  attr: 'data-login'
}, sendLoginData);

EventHandler.on({
  action: 'click',
  attr: 'data-registration'
}, sendRegistrationData);

EventHandler.on({
  action: 'click',
  attr: 'data-delete-friend'
}, sendDeleteFriendRequest);

EventHandler.on({
  action: 'click',
  attr: 'data-drow-route-to-user'
}, getUserLocation);

EventHandler.on({
  action: 'click',
  attr: 'data-get-position'
}, getUserPosition);
