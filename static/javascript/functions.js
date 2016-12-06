function sendLoginData(){
  var fields = {
    email: document.getElementById('LOGIN_email').value,
    password: document.getElementById('LOGIN_password').value
  };

  if(fields.email != '' && fields.password != ''){
    Ajax.post('api/v1.0/login/', fields, function(){
      var data = JSON.parse(this);

      if(data.success){
        goToHomePage();
      } else {
        alert(data.message);
      }
    });
  } else {
    alert('Please, fill all fields.');
  }
}

function sendRegistrationData(){
  var fields = {
    first_name: document.getElementById('REGISTRATION_fname').value,
    last_name: document.getElementById('REGISTRATION_lname').value,
    email: document.getElementById('REGISTRATION_email').value,
    password: document.getElementById('REGISTRATION_password').value,
    // repeatPassword: document.getElementById('REGISTRATION_password_r').value
  };

  if(fields.first_name != '' && fields.last_name != '' && fields.email != ''
  && fields.password != '' ) //&& fields.repeatPassword != ''
  {
    Ajax.post('api/v1.0/register/', fields, function(){
      var data = JSON.parse(this);

      if(data.success){
        goToHomePage();
      } else {
        alert(data.message);
      }
    });
  } else {
    alert('Please, fill all fields.');
  }
}
