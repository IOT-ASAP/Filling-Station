var globalWrapper = document.getElementById('wrapper');

function loadLoginPage(){
  Ajax.page('login', function(){
    globalWrapper.innerHTML = this;
  });
}

function goToHomePage(){
  Ajax.page('home', function(){
    globalWrapper.innerHTML = this;
  });
}
