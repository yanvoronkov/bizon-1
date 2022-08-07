
function validate() {
	let userName = document.getElementById('formName');
	let phone = document.getElementById('formPhone');

	if (!userName.value) {
		formName.style.border = "2px solid red";
		return false;
	}

	if (!phone.value) {
		formPhone.style.border = "2px solid red";
		return false;
	}
	return true;
}