var globalWrapper = document.getElementById('wrapper');

function loadLoginPage(){
  Ajax.page('map', function(){
    globalWrapper.innerHTML = this;
    document.getElementById('mapScript').setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDsiKb2ZnfXxmWfEMsR3bnvf56x-mQKIX0&callback=initMap');
  });
}

function goToHomePage(){
  Ajax.page('home', function(){
    globalWrapper.innerHTML = this;
  });
}
