import Swal from 'sweetalert2';
import alertPicture from '../images/bg-s/alertphoto.jpg';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contactsForm');
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
					text: 'Message sent successfully.',
					imageUrl: alertPicture,
					imageWidth: 400,
					imageHeight: 268,
					imageAlt: 'alert image',
				});

				form.reset();
				form.classList.remove('_sending');
			} else {
				form.reset();
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				});
				form.classList.remove('_sending');
			}
			// } else {
			// 	alert('Fill all fields please');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
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

	function emailTest(input) {
		// Регулярное выражение для проверки валидности email
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});
