menu.onclick = function menu() {
	var x = document.getElementById('mobile-list')

	if (x.className === 'mobile-none') {
		x.className += ' mobile-list';
	}
	else {
		x.className = 'mobile-none';
	}
}
