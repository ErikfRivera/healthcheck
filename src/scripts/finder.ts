/**
 * Hero finder → scan-grid filter.
 *
 * There is no provider network behind this yet, so "compare prices near you"
 * narrows the grid to the chosen scan and states plainly that local pricing
 * is still to come. State lives in the query string, which means the no-JS
 * form submit (a GET to `?scan=03&zip=94110#scans`) lands on a page that
 * reads those params back and applies the same filter.
 */

const form = document.querySelector<HTMLFormElement>('#scan-finder');
const scanSelect = document.querySelector<HTMLSelectElement>('#finder-scan');
const zipInput = document.querySelector<HTMLInputElement>('#finder-zip');
const grid = document.querySelector<HTMLElement>('#scan-grid');
const bar = document.querySelector<HTMLElement>('#filter-bar');
const summary = document.querySelector<HTMLElement>('#filter-summary');
const reset = document.querySelector<HTMLButtonElement>('#filter-reset');

if (form && scanSelect && zipInput && grid && bar && summary && reset) {
  const cards = Array.from(grid.querySelectorAll<HTMLElement>('.scan-card'));

  const titleOf = (num: string) =>
    scanSelect.querySelector<HTMLOptionElement>(`option[value="${num}"]`)?.textContent ?? '';

  const normalizeZip = (value: string) => value.replace(/\D/g, '').slice(0, 5);

  /** Show every scan and clear the filter bar. */
  function clearFilter() {
    for (const card of cards) card.hidden = false;
    grid!.classList.remove('is-filtered');
    bar!.hidden = true;
    summary!.textContent = '';
  }

  function applyFilter(num: string, zip: string) {
    const title = titleOf(num);
    if (!title) {
      clearFilter();
      return;
    }

    for (const card of cards) card.hidden = card.dataset.scan !== num;
    grid!.classList.add('is-filtered');

    // Built as nodes rather than innerHTML — the ZIP is user input.
    summary!.replaceChildren();
    summary!.append('Showing ');
    const strong = document.createElement('strong');
    strong.textContent = title;
    summary!.append(strong);
    summary!.append(
      zip.length === 5
        ? `. Local pricing near ${zip} is coming soon — the price below is our national starting rate.`
        : '. Add a ZIP code to compare local imaging centers when the network is live.'
    );

    bar!.hidden = false;
  }

  /** Reflect the current filter in the URL so it can be shared or reloaded. */
  function syncUrl(num: string, zip: string) {
    const url = new URL(window.location.href);
    if (num) url.searchParams.set('scan', num);
    else url.searchParams.delete('scan');
    if (zip.length === 5) url.searchParams.set('zip', zip);
    else url.searchParams.delete('zip');
    url.hash = num ? '#scans' : '';
    window.history.replaceState(null, '', url);
  }

  function scrollToScans() {
    const scans = document.getElementById('scans');
    if (!scans) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: scans.getBoundingClientRect().top + window.scrollY - 24,
      behavior: reduced ? 'auto' : 'smooth',
    });
  }

  zipInput.addEventListener('input', () => {
    const cleaned = normalizeZip(zipInput.value);
    if (cleaned !== zipInput.value) zipInput.value = cleaned;
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const num = scanSelect.value;
    const zip = normalizeZip(zipInput.value);
    if (num) applyFilter(num, zip);
    else clearFilter();
    syncUrl(num, zip);
    scrollToScans();
  });

  reset.addEventListener('click', () => {
    scanSelect.value = '';
    clearFilter();
    syncUrl('', normalizeZip(zipInput.value));
    reset.blur();
  });

  // Restore a filter carried in the URL — either a shared link or the no-JS
  // form submit landing back here.
  const params = new URLSearchParams(window.location.search);
  const initialScan = params.get('scan') ?? '';
  const initialZip = normalizeZip(params.get('zip') ?? '');
  if (initialZip) zipInput.value = initialZip;
  if (initialScan && titleOf(initialScan)) {
    scanSelect.value = initialScan;
    applyFilter(initialScan, initialZip);
  }
}
