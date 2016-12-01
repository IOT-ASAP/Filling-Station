EventHandler.on({
  action: 'click',
  attr: 'data-load-page'
}, function(event, target, attr){
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
