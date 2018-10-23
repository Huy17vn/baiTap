var btnSubmit = document.forms ["register-form"] ["btn-submit"];
btnSubmit.onclick = function () {
	var txtUsername = document.forms ["register-form"] ["username"];
	var msgUsename = txtUsername.nextElementSiling;
	if (txtUsername.value.lenght < 5 ) {
		msgUsename.innerHTML = "* Vui lòng nhập tên.";
		msgUsename.classList.remove("hidden-text")

	} else if (txtUsername.value.lenght < 20 ) {

	} else if (txtUsername.value.lenght < 20 ) {

	} else {

	}
}