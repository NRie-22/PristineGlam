import Swal from 'sweetalert2';
import alertPicture from '../images/bg-s/alertphoto.jpg';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('appointmentForm');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');

			let response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				// let result = await response.json();
				Swal.fire({
					title: 'Success!',
					text: 'Contact sent successfully.',
					imageUrl: alertPicture,
					imageWidth: 400,
					imageHeight: 268,
					imageAlt: 'alert image',
				});

				form.reset();
				form.classList.remove('_sending');
			} else {
				form.reset();
				alert('Error happend');
				form.classList.remove('_sending');
			}
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_phone')) {
				if (phoneTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function phoneTest(input) {
		// Регулярное выражение для проверки валидности phone
		return !/\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
	}
});
