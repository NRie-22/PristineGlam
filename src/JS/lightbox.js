import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery .portfolio-link', {
	captions: false,
	showCounter: false,
	fixedClass: 'sl-fixed',
});
