const select = document.getElementById('langSelect');
const allLang = ['en', 'uk', 'pl', 'de'];

select.addEventListener('change', changeURLLang);

async function changeURLLang() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

async function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substring(1);

	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;

	let allTranslations = {};

	Promise.all([
		import('../translation/en.js'),
		import('../translation/pl.js'),
		import('../translation/de.js'),
		import('../translation/uk.js'),
	])
		.then(([en, pl, de, uk]) => {
			allTranslations = {
				en,
				pl,
				de,
				uk,
			};

			const langData = allTranslations;
			const object = langData[hash][hash];

			for (let key in object) {
				const elem = document.querySelector(`[data-t=${key}]`);

				if (elem) {
					elem.innerHTML = object[key];
				} else {
					console.warn(`Element with data-t=${key} not found.`);
				}
			}
		})
		.catch(error => console.error('Ошибка импорта:', error));
}
changeLanguage();
