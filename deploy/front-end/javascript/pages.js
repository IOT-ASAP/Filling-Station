var globalWrapper = document.getElementById('wrapper');

function loadLoginPage(){
  Ajax.page('home', function(){
    globalWrapper.innerHTML = this;
  });
}

function goToHomePage(){
  Ajax.page('home', function(){
    globalWrapper.innerHTML = this;
  });
}