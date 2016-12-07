window.addEventListener('load', function(){
  loadLoginPage();
}, false);

document.addEventListener('click', function(event){
  var target = event.target,
      menu = document.getElementById('menu');

  while(target != document){
    if(target.getAttribute('data-toggle-menu') || target == menu){
      removeClass(menu, 'hide');
      addClass(menu, 'show');
      menu.style.left = 0;
      return;
    }
    target = target.parentNode;
  }
  removeClass(menu, 'show');
  addClass(menu, 'hide');
  menu.style.left = '-81vw';
}, false);
