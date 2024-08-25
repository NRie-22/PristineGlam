import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localePl from 'air-datepicker/locale/pl';
import localeEn from 'air-datepicker/locale/en';
import localeDe from 'air-datepicker/locale/de';
import localeUK from 'air-datepicker/locale/uk';

new AirDatepicker('#appointmentPicker', {
	// inline: true,
	isMobile: true,
	position: 'bottom center',
	// locale: ['localeDe', 'localeUK', 'localePl', 'localeEn'],
	autoClose: true,
	minDate: new Date(),
	firstDay: 1,
	dateFormat: 'dd/MM/yyyy',
	locale: localeDe,
	locale: localeUK,
	locale: localePl,
	locale: localeEn,
	weekends: [6, 0],
	navTitles: {
		days: ' <div>EEEE</div> <span>MMM</span> <strong>dd</strong> <i>yyyy</i>',
	},
	buttons: ['today', 'clear'],
	// timepicker: true,
});
