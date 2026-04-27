import tr from './tr.json';
import en from './en.json';

const translations: Record<string, typeof tr> = { tr, en };

export function getTranslations(lang: string = 'tr') {
  return translations[lang] || translations.tr;
}

export function getLanguages() {
  return [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];
}

export function getAlternateLang(currentLang: string): string {
  return currentLang === 'tr' ? 'en' : 'tr';
}

export function getLangUrl(lang: string): string {
  return lang === 'tr' ? '/' : '/en/';
}
