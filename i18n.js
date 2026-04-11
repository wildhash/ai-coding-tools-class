// i18n.js — Padang AI Coding Tools Class
// Language toggle engine for EN / Bahasa Indonesia
// FIX: reference `translations` directly (same global scope as translations.js)
//      instead of `window.translations` which was always undefined.

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
    // translations is defined in translations.js which loads first
    if (typeof translations === 'undefined') return;
    // Clamp unsupported locales to the default so the UI always renders
    if (!translations[lang]) { lang = 'en'; }
    var dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // Use innerHTML so any HTML markup in translation strings is rendered
        // correctly (e.g. links, <code> elements); translations.js is static
        // site code, so there is no XSS risk from external input.
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.documentElement.lang = lang === 'id' ? 'id' : 'en';

    document.querySelectorAll('.lang-toggle').forEach(function(btn) {
      btn.textContent = lang === 'id' ? '🇮🇩 ID | 🇬🇧 EN' : '🇬🇧 EN | 🇮🇩 ID';
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
    var lang = loadLanguagePreference();
    applyTranslations(lang);
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
