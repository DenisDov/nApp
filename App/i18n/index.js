import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import english from './locales/en';
import russian from './locales/ru';

console.log('LOCALES', RNLocalize.getLocales());
console.log('FIRST LOCALE', RNLocalize.getLocales()[0].languageCode);

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
	en: {
		translation: english,
	},
	ru: {
		translation: russian,
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: RNLocalize.getLocales()[0].languageCode, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
