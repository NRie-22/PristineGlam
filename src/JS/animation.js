function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight * 1.3 || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function animateIfVisible() {
	const elements = document.querySelectorAll('.animated-element');
	elements.forEach(function (element) {
		if (isElementInViewport(element)) {
			const animation = element.dataset.animation;
			element.classList.add('animated', animation);
		}
	});
}

document.addEventListener('scroll', animateIfVisible);
document.addEventListener('DOMContentLoaded', animateIfVisible);

window.onload = function () {
	window.scrollTo(0, 0);
};
