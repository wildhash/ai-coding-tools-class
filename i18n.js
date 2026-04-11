// i18n.js — Padang AI Coding Tools Class
// FIX: use `translations` directly — `window.translations` was always undefined
// because translations.js declares `const translations` (block-scoped, not on window)

(function () {
  var STORAGE_KEY = 'padang-ai-lang';
  var currentLang = 'en';

  function saveLanguagePreference(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function loadLanguagePreference() {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { return 'en'; }
  }

  function applyTranslations(lang) {
    // `translations` is defined in translations.js which loads before this file
    if (typeof translations === 'undefined' || !translations[lang]) return;
    var dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    document.documentElement.lang = lang === 'id' ? 'id' : 'en';

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'id'
        ? '\uD83C\uDDEE\uD83C\uDDE9 ID | \uD83C\uDDEC\uD83C\uDDE7 EN'
        : '\uD83C\uDDEC\uD83C\uDDE7 EN | \uD83C\uDDEE\uD83C\uDDE9 ID';
      btn.setAttribute('aria-pressed', lang === 'id' ? 'true' : 'false');
    });

    currentLang = lang;
  }

  function toggleLanguage() {
    var next = currentLang === 'en' ? 'id' : 'en';
    applyTranslations(next);
    saveLanguagePreference(next);
  }

  function init() {
    applyTranslations(loadLanguagePreference());
  }

  window.toggleLanguage = toggleLanguage;
  window.applyTranslations = applyTranslations;
  window.i18nInit = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
