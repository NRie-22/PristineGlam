document.addEventListener('DOMContentLoaded', function () {
	const navMenuBtn = document.querySelector('.nav-menu__btn');
	const navLinks = document.querySelector('.header-nav-links');
	const backDrop = document.querySelector('.header-nav-backdrop');
	const socButton = document.querySelector('.social-button');
	const socLinks = document.querySelector('.social-links');

	navMenuBtn.addEventListener('click', function () {
		navMenuBtn.classList.toggle('active');
		navLinks.classList.toggle('active');
		backDrop.classList.toggle('active');
		socLinks.classList.remove('active');
		socButton.classList.remove('active');
	});

	backDrop.addEventListener('click', function () {
		navMenuBtn.classList.remove('active');
		navLinks.classList.remove('active');
		backDrop.classList.remove('active');
		socLinks.classList.remove('active');
		socButton.classList.remove('active');
	});

	socButton.addEventListener('click', function () {
		navMenuBtn.classList.remove('active');
		navLinks.classList.remove('active');
		backDrop.classList.toggle('active');
		socLinks.classList.toggle('active');
		socButton.classList.toggle('active');
	});
});
