function checklogin() {

	var user = document.getElementById('username');
	var passw = document.getElementById('password');

	var coruser = "fred";
	var corpassw = "93/4";

	if(user.value == coruser) {
		if(passw.value == corpassw) {
			window.opem('https://github.com/obliviate-dan');
		} else {
			window.alert("The username and password you entered don't match");

		}
	} else {
		window.alert("The username and password you entered don't match");
	}






