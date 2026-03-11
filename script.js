document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initScrollAnimations();
  initSmoothScroll();
  initSkillTagShuffle();
});

function initClock() {
  const el = document.getElementById('locationTime');
  if (!el) return;

  function update() {
    const now = new Date();
    const opts = {
      timeZone: 'America/Chicago',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    const dateOpts = {
      timeZone: 'America/Chicago',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    const time = now.toLocaleTimeString('en-US', opts);
    const date = now.toLocaleDateString('en-US', dateOpts);
    el.textContent = `Austin, TX · ${time} · ${date}`;
  }

  update();
  setInterval(update, 30000);
}

function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.exp-detail-card, .proj-detail-card, .expertise-card, ' +
    '.skill-category, .education-row, .experience-intro, ' +
    '.projects-intro, .contact-inner'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((t) => observer.observe(t));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initSkillTagShuffle() {
  const tags = document.querySelectorAll('.skill-tag');
  tags.forEach((tag) => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = `rotate(${(Math.random() - 0.5) * 4}deg) scale(1.05)`;
    });
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = 'rotate(0deg) scale(1)';
    });
  });
}
