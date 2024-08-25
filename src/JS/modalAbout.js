document.addEventListener('DOMContentLoaded', function () {
	const modal = document.querySelector('.modal_about');
	const contactBtn = document.querySelector('.modal_about-button');
	const viewMoreBtn = document.querySelector('.about-button');
	const closeButton = document.querySelector('.modal_about-close');
	const backdrop = document.querySelector('.modal_about-backdrop');
	const body = document.querySelector('body');
	const header = document.querySelector('.header');
	const scrollUpBtn = document.querySelector('.scrollUpButton');

	viewMoreBtn.addEventListener('click', function () {
		bodyLock();
		modal.classList.remove('is-hidden');
		backdrop.classList.remove('is-hidden');
	});

	closeButton.addEventListener('click', function () {
		bodyUnLock();
		modal.classList.add('is-hidden');
		backdrop.classList.add('is-hidden');
	});

	contactBtn.addEventListener('click', function () {
		bodyUnLock();
		modal.classList.toggle('is-hidden');
		backdrop.classList.toggle('is-hidden');
	});

	backdrop.addEventListener('click', function () {
		bodyUnLock();
		modal.classList.add('is-hidden');
		backdrop.classList.add('is-hidden');
	});

	function bodyLock() {
		let lockPaddingValue = window.innerWidth - backdrop.offsetWidth + 'px';

		body.classList.add('no-scroll');
		header.style.marginRight = lockPaddingValue;
		body.style.paddingRight = lockPaddingValue;
		scrollUpBtn.style.marginRight = lockPaddingValue;
	}

	function bodyUnLock() {
		body.classList.remove('no-scroll');
		header.style.marginRight = 0;
		body.style.paddingRight = 0;
		scrollUpBtn.style.marginRight = 0;
	}
});
