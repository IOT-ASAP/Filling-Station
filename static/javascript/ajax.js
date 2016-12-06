var Ajax = {
	getXHR: function(){
  	var xhr;
  	try {
    	xhr = new ActiveXObject("Msxml2.XMLHTTP");
  	} catch (e) {
    	try {
      	xhr = new ActiveXObject("Microsoft.XMLHTTP");
    	} catch (E) {
      	xhr = false;
    	}
  	}
  	if (!xhr && typeof XMLHttpRequest != 'undefined') {
    	xhr = new XMLHttpRequest();
  	}
  	return xhr;
	},
	post: function(url, onSendData, callback){
		var xhr = this.getXHR(),
		 		onSendData = JSON.stringify(onSendData);
		xhr.open('POST', url, true);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send(onSendData);

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				callback.call(xhr.responseText);
			}
		};
	},
  get: function(url, callback){
    var xhr = this.getXHR();

		xhr.open('GET', options.url, true);
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				callback.call(xhr.responseText);
			}
		};
  },
  page: function(pageName, callback){
    var xhr = this.getXHR();

		xhr.open('GET', 'static/pages/' + pageName + '.html', true);
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				callback.call(xhr.responseText);
			}
		};
  }
};
