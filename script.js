(() => {
  const TARGET_URL = 'https://cyan-fox-avery.github.io/27-things/';
  const button = document.getElementById('open-button');
  const gift = document.getElementById('gift');

  if (!button || !gift) return;

  let opening = false;

  button.addEventListener('click', (event) => {
    if (opening) { event.preventDefault(); return; }
    event.preventDefault();
    opening = true;

    button.setAttribute('aria-disabled', 'true');
    button.setAttribute('aria-label', 'Opening your present');
    button.querySelector('span:first-child').textContent = 'opening…';

    gift.classList.add('is-opening');
    document.body.classList.add('is-opening');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduceMotion ? 280 : 1900;

    window.setTimeout(() => {
      window.location.assign(TARGET_URL);
    }, delay);
  });
})();
