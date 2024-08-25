document.addEventListener('DOMContentLoaded', function () {
	// Плавный переход по клику на ссылку
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				// Плавная прокрутка с заданным временем (1.5 секунды)
				let startTime;
				const startPosition = window.scrollY + 50;
				const targetPosition = targetElement.offsetTop;
				const distance = targetPosition - startPosition;
				const duration = 1500; // Время в миллисекундах

				// убирание меню при нажатии на ссылку
				const navMenuBtn = document.querySelector('.nav-menu__btn');
				const navLinks = document.querySelector('.header-nav-links');
				const backDrop = document.querySelector('.header-nav-backdrop');

				navMenuBtn.classList.remove('active');
				navLinks.classList.remove('active');
				backDrop.classList.remove('active');
				// ---------------------------------

				function animateScroll(currentTime) {
					if (startTime === undefined) {
						startTime = currentTime;
					}

					const elapsedTime = currentTime - startTime;
					const progress = Math.min(elapsedTime / duration, 1);
					const easeInOutCubic =
						progress < 0.5
							? 4 * progress ** 3
							: (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
					const newPosition = startPosition + distance * easeInOutCubic - 50;

					window.scrollTo(0, newPosition);

					if (elapsedTime < duration) {
						requestAnimationFrame(animateScroll);
					}
				}

				requestAnimationFrame(animateScroll);
			}
		});
	});
});
