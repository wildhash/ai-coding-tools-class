/**
 * Tests for i18n.js — scoped to PR changes:
 *   1. [data-i18n-aria] attribute handling: sets aria-label from translation dict
 *   2. .lang-toggle aria-pressed attribute: 'true' for 'id', 'false' for 'en'
 */

'use strict';

// Minimal translations fixture used across tests.
const fixtureTranslations = {
  en: {
    'nav.home': 'Home',
    'aria.search': 'Search',
    'aria.menu': 'Open menu',
  },
  id: {
    'nav.home': 'Beranda',
    'aria.search': 'Cari',
    'aria.menu': 'Buka menu',
  },
};

// Helper: load a fresh copy of i18n.js (re-executes the IIFE).
// We must reset modules and re-set globals each time so tests are isolated.
function loadI18n() {
  jest.resetModules();
  global.translations = fixtureTranslations;
  // jsdom readyState is 'complete', so the IIFE calls init() → applyTranslations('en')
  // immediately. That's fine; tests call window.applyTranslations() explicitly after
  // setting up the DOM they care about.
  require('./i18n.js');
}

// ---------------------------------------------------------------------------
// Group 1: [data-i18n-aria] → sets aria-label
// ---------------------------------------------------------------------------

describe('[data-i18n-aria] aria-label translation (new in PR)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    loadI18n();
  });

  test('sets aria-label on an element when the key exists in the EN dict', () => {
    document.body.innerHTML = '<button data-i18n-aria="aria.search"></button>';
    window.applyTranslations('en');
    const btn = document.querySelector('[data-i18n-aria]');
    expect(btn.getAttribute('aria-label')).toBe('Search');
  });

  test('sets aria-label on an element when the key exists in the ID dict', () => {
    document.body.innerHTML = '<button data-i18n-aria="aria.search"></button>';
    window.applyTranslations('id');
    const btn = document.querySelector('[data-i18n-aria]');
    expect(btn.getAttribute('aria-label')).toBe('Cari');
  });

  test('does NOT set aria-label when the key is absent from the dict', () => {
    document.body.innerHTML = '<button data-i18n-aria="aria.nonexistent"></button>';
    window.applyTranslations('en');
    const btn = document.querySelector('[data-i18n-aria]');
    expect(btn.hasAttribute('aria-label')).toBe(false);
  });

  test('does NOT overwrite an existing aria-label when key is absent', () => {
    document.body.innerHTML =
      '<button data-i18n-aria="aria.nonexistent" aria-label="kept"></button>';
    window.applyTranslations('en');
    const btn = document.querySelector('[data-i18n-aria]');
    expect(btn.getAttribute('aria-label')).toBe('kept');
  });

  test('sets aria-label on multiple elements independently', () => {
    document.body.innerHTML = `
      <button data-i18n-aria="aria.search"></button>
      <button data-i18n-aria="aria.menu"></button>
    `;
    window.applyTranslations('en');
    const [searchBtn, menuBtn] = document.querySelectorAll('[data-i18n-aria]');
    expect(searchBtn.getAttribute('aria-label')).toBe('Search');
    expect(menuBtn.getAttribute('aria-label')).toBe('Open menu');
  });

  test('updates aria-label when language switches from EN to ID', () => {
    document.body.innerHTML = '<button data-i18n-aria="aria.search"></button>';
    window.applyTranslations('en');
    expect(document.querySelector('[data-i18n-aria]').getAttribute('aria-label')).toBe('Search');
    window.applyTranslations('id');
    expect(document.querySelector('[data-i18n-aria]').getAttribute('aria-label')).toBe('Cari');
  });

  test('updates aria-label when language switches back from ID to EN', () => {
    document.body.innerHTML = '<button data-i18n-aria="aria.menu"></button>';
    window.applyTranslations('id');
    window.applyTranslations('en');
    expect(document.querySelector('[data-i18n-aria]').getAttribute('aria-label')).toBe(
      'Open menu'
    );
  });

  test('does not throw when no [data-i18n-aria] elements are present', () => {
    document.body.innerHTML = '<div></div>';
    expect(() => window.applyTranslations('en')).not.toThrow();
  });

  test('handles element with empty data-i18n-aria attribute gracefully', () => {
    // Empty key → dict[''] is undefined → no change
    document.body.innerHTML = '<button data-i18n-aria=""></button>';
    expect(() => window.applyTranslations('en')).not.toThrow();
    const btn = document.querySelector('[data-i18n-aria]');
    expect(btn.hasAttribute('aria-label')).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Group 2: .lang-toggle aria-pressed attribute (new in PR)
// ---------------------------------------------------------------------------

describe('.lang-toggle aria-pressed attribute (new in PR)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    loadI18n();
  });

  test('sets aria-pressed="true" on .lang-toggle when lang is "id"', () => {
    document.body.innerHTML = '<button class="lang-toggle"></button>';
    window.applyTranslations('id');
    const btn = document.querySelector('.lang-toggle');
    expect(btn.getAttribute('aria-pressed')).toBe('true');
  });

  test('sets aria-pressed="false" on .lang-toggle when lang is "en"', () => {
    document.body.innerHTML = '<button class="lang-toggle"></button>';
    window.applyTranslations('en');
    const btn = document.querySelector('.lang-toggle');
    expect(btn.getAttribute('aria-pressed')).toBe('false');
  });

  test('aria-pressed updates from false to true when switching en → id', () => {
    document.body.innerHTML = '<button class="lang-toggle"></button>';
    window.applyTranslations('en');
    expect(document.querySelector('.lang-toggle').getAttribute('aria-pressed')).toBe('false');
    window.applyTranslations('id');
    expect(document.querySelector('.lang-toggle').getAttribute('aria-pressed')).toBe('true');
  });

  test('aria-pressed updates from true to false when switching id → en', () => {
    document.body.innerHTML = '<button class="lang-toggle"></button>';
    window.applyTranslations('id');
    expect(document.querySelector('.lang-toggle').getAttribute('aria-pressed')).toBe('true');
    window.applyTranslations('en');
    expect(document.querySelector('.lang-toggle').getAttribute('aria-pressed')).toBe('false');
  });

  test('sets aria-pressed on every .lang-toggle button when multiple are present', () => {
    document.body.innerHTML = `
      <button class="lang-toggle"></button>
      <button class="lang-toggle"></button>
      <button class="lang-toggle"></button>
    `;
    window.applyTranslations('id');
    const buttons = document.querySelectorAll('.lang-toggle');
    buttons.forEach((btn) => {
      expect(btn.getAttribute('aria-pressed')).toBe('true');
    });
  });

  test('all .lang-toggle buttons get aria-pressed="false" for EN', () => {
    document.body.innerHTML = `
      <button class="lang-toggle"></button>
      <button class="lang-toggle"></button>
    `;
    window.applyTranslations('en');
    const buttons = document.querySelectorAll('.lang-toggle');
    buttons.forEach((btn) => {
      expect(btn.getAttribute('aria-pressed')).toBe('false');
    });
  });

  test('does not throw when no .lang-toggle elements are present', () => {
    document.body.innerHTML = '<div></div>';
    expect(() => window.applyTranslations('en')).not.toThrow();
  });

  // Regression: aria-pressed value is always the string 'true' or 'false',
  // not a boolean, matching correct ARIA usage.
  test('aria-pressed is a string "true"/"false", not a boolean', () => {
    document.body.innerHTML = '<button class="lang-toggle"></button>';
    window.applyTranslations('id');
    const val = document.querySelector('.lang-toggle').getAttribute('aria-pressed');
    expect(typeof val).toBe('string');
    expect(val).toBe('true');
  });
});

// ---------------------------------------------------------------------------
// Group 3: Combined regression — both features applied in same call
// ---------------------------------------------------------------------------

describe('aria-label and aria-pressed both applied in a single applyTranslations call', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    loadI18n();
  });

  test('aria-label and aria-pressed are both set correctly for lang "id"', () => {
    document.body.innerHTML = `
      <button data-i18n-aria="aria.search"></button>
      <button class="lang-toggle"></button>
    `;
    window.applyTranslations('id');
    expect(
      document.querySelector('[data-i18n-aria]').getAttribute('aria-label')
    ).toBe('Cari');
    expect(
      document.querySelector('.lang-toggle').getAttribute('aria-pressed')
    ).toBe('true');
  });

  test('aria-label and aria-pressed are both set correctly for lang "en"', () => {
    document.body.innerHTML = `
      <button data-i18n-aria="aria.search"></button>
      <button class="lang-toggle"></button>
    `;
    window.applyTranslations('en');
    expect(
      document.querySelector('[data-i18n-aria]').getAttribute('aria-label')
    ).toBe('Search');
    expect(
      document.querySelector('.lang-toggle').getAttribute('aria-pressed')
    ).toBe('false');
  });

  test('an element can carry both data-i18n-aria and class lang-toggle simultaneously', () => {
    // A single element that is both a toggle button AND has an aria-label to translate.
    document.body.innerHTML =
      '<button class="lang-toggle" data-i18n-aria="aria.menu"></button>';
    window.applyTranslations('id');
    const btn = document.querySelector('button');
    expect(btn.getAttribute('aria-label')).toBe('Buka menu');
    expect(btn.getAttribute('aria-pressed')).toBe('true');
  });
});