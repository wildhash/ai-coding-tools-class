// i18n.js — Padang AI Coding Tools Class
// Language toggle engine for EN / Bahasa Indonesia

(function () {
  const STORAGE_KEY = 'padang-ai-lang';
  let currentLang = 'en';

  function saveLanguagePreference(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function loadLanguagePreference() {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { return 'en'; }
  }

  function applyTranslations(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // preserve child elements (e.g. links inside text)
        if (el.children.length === 0) {
          el.textContent = dict[key];
        } else {
          // only update if element has a direct text node to replace
          el.setAttribute('data-i18n-value', dict[key]);
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';

    // Update toggle buttons
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'id' ? '🇮🇩 ID | 🇬🇧 EN' : '🇬🇧 EN | 🇮🇩 ID';
      btn.setAttribute('aria-pressed', lang === 'id' ? 'true' : 'false');
    });

    currentLang = lang;
  }

  function toggleLanguage() {
    const next = currentLang === 'en' ? 'id' : 'en';
    applyTranslations(next);
    saveLanguagePreference(next);
  }

  function init() {
    const lang = loadLanguagePreference();
    applyTranslations(lang);
  }

  // Expose globally
  window.toggleLanguage = toggleLanguage;
  window.applyTranslations = applyTranslations;
  window.i18nInit = init;

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
