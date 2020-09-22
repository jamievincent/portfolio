function myFunction() {
	var x = document.getELementById("myNav");
	if (x.className === 'nav') {
		x.className += 'responsive';
	} else {
		x.className = 'nav';
	}
}