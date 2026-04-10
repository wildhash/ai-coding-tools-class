// script.js — Padang AI Coding Tools Class
// Shared JS: navbar, theme, copy buttons, tabs, tool filter, progress bar

(function () {
  'use strict';

  // ── Theme toggle ──────────────────────────────────────────────
  const THEME_KEY = 'padang-ai-theme';

  function getTheme() {
    try { return localStorage.getItem(THEME_KEY) || 'dark'; } catch { return 'dark'; }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  window.toggleTheme = toggleTheme;

  // ── Navbar: scroll shadow + active link + hamburger ──────────
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      }, { passive: true });
    }

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        const open = hamburger.classList.toggle('open');
        navLinks.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
      });

      // Close on link click
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on outside click
      document.addEventListener('click', e => {
        if (!navbar.contains(e.target)) {
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Active nav link
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active',
        href === current ||
        (current === '' && href === 'index.html') ||
        (current === '/' && href === 'index.html')
      );
    });
  }

  // ── Copy buttons on pre blocks ─────────────────────────────
  function initCopyButtons() {
    document.querySelectorAll('pre').forEach(pre => {
      if (pre.querySelector('.copy-btn')) return; // already has one
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code');
      btn.addEventListener('click', () => {
        const code = pre.querySelector('code');
        const text = code ? code.textContent : pre.textContent;
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          btn.textContent = 'Error';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        });
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  // ── Tabs ──────────────────────────────────────────────────────
  function initTabs() {
    document.querySelectorAll('.tab-list').forEach(tabList => {
      tabList.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;
          const container = btn.closest('.tabs');
          if (!container || !target) return;

          container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

          btn.classList.add('active');
          const content = container.querySelector(`[data-tab-content="${target}"]`);
          if (content) content.classList.add('active');
        });
      });
    });
  }

  // ── Tool filter bar ───────────────────────────────────────────
  function initFilter() {
    const filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return;

    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter || 'all';
        document.querySelectorAll('.tool-card').forEach(card => {
          if (filter === 'all') {
            card.style.display = '';
          } else {
            const tags = (card.dataset.tags || '').split(',');
            card.style.display = tags.includes(filter) ? '' : 'none';
          }
        });
      });
    });
  }

  // ── Progress bar for checklist ────────────────────────────────
  function initProgress() {
    const progressBar = document.querySelector('.progress-bar');
    const progressCount = document.querySelector('.progress-count');
    const doneBanner = document.querySelector('.done-banner');
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');

    if (!progressBar || checkboxes.length === 0) return;

    const PROGRESS_KEY = 'padang-setup-progress';

    // Restore saved state
    try {
      const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
      checkboxes.forEach(cb => {
        if (saved[cb.id]) cb.checked = true;
      });
    } catch {}

    function updateProgress() {
      const checked = document.querySelectorAll('.checklist input:checked').length;
      const total = checkboxes.length;
      const pct = Math.round((checked / total) * 100);

      progressBar.style.width = pct + '%';
      if (progressCount) progressCount.textContent = `${checked} / ${total}`;
      if (doneBanner) doneBanner.style.display = pct === 100 ? 'block' : 'none';

      // Save
      try {
        const state = {};
        checkboxes.forEach(cb => { if (cb.id) state[cb.id] = cb.checked; });
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
      } catch {}
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));
    updateProgress();
  }

  // ── Prompt copy buttons on project cards ──────────────────────
  function initPromptCopy() {
    document.querySelectorAll('.prompt-copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prompt = btn.closest('.project-prompt')?.textContent?.trim()
          || btn.dataset.prompt || '';
        navigator.clipboard.writeText(prompt).then(() => {
          const origText = btn.textContent;
          btn.textContent = '✓ Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = origText;
            btn.classList.remove('copied');
          }, 2500);
        });
      });
    });
  }

  // ── Scroll-reveal (intersection observer) ────────────────────
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animate-slide-up');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tool-card, .project-card, .card, .flow-step').forEach(el => {
      el.style.opacity = '0';
      io.observe(el);
    });

    // After animation, reset opacity so CSS handles it
    document.querySelectorAll('.tool-card, .project-card, .card, .flow-step').forEach(el => {
      el.addEventListener('animationstart', () => { el.style.opacity = ''; }, { once: true });
    });
  }

  // ── Init all ─────────────────────────────────────────────────
  function init() {
    applyTheme(getTheme());
    initNavbar();
    initCopyButtons();
    initTabs();
    initFilter();
    initProgress();
    initPromptCopy();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
