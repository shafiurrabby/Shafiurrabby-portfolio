const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
	document.body.classlist.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener()'click', () => {
		document.body.classlist.remove('nav-open');		
	})
})