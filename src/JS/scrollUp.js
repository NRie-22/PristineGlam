const scrollUpButton = document.getElementById('scrollUpButton');

window.addEventListener('scroll', () => {
	if (window.scrollY > window.innerHeight / 2) {
		scrollUpButton.style.transform = 'translate3d(0, 0, 0)';
	} else {
		scrollUpButton.style.transform = 'translate3d(0, 100px, 0)';
	}
});

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');

	if (window.scrollY >= 50) {
		header.classList.add('header-sticky');
	} else {
		header.classList.remove('header-sticky');
	}
});
