document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('section');
	const navLinks = document.querySelectorAll('nav a');

	window.addEventListener('scroll', () => {
		let current = '';

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (scrollY >= sectionTop - sectionHeight / 3) {
				current = section.getAttribute('id');
			}
		});

		navLinks.forEach(link => {
			link.classList.remove('header-nav-link--active');
			if (link.getAttribute('href').slice(1) === current) {
				link.classList.add('header-nav-link--active');
			}
		});
	});
});
