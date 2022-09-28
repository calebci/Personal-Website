function changeTheme() {
	if(document.getElementById("page_style").getAttribute('href') === 'style.css') {
		document.getElementById("page_style").setAttribute('href', 'alt.css');
		localStorage.setItem("theme", 'alt.css');
	} else if(document.getElementById("page_style").getAttribute('href') === 'alt.css') {
		document.getElementById("page_style").setAttribute('href', 'style.css');
		localStorage.setItem("theme", 'style.css');
	}
}

window.onload = function() {
	if(!localStorage.getItem("theme")) {
		localStorage.setItem("theme", 'style.css');
	}
	document.getElementById("page_style").setAttribute('href', localStorage.getItem("theme"));
}