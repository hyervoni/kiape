/**
 * Site-wide behaviour, kept deliberately small:
 * - header/mobile CTA state on scroll
 * - reveal-on-scroll
 * - attribution capture (UTM / click IDs) for SEM & Meta campaigns
 * - lead form submit (Web3Forms if configured, otherwise WhatsApp)
 * - dataLayer events for GTM
 */

type DL = Record<string, unknown>[];
const w = window as unknown as { dataLayer?: DL };
const track = (event: string, data: Record<string, unknown> = {}) => {
  (w.dataLayer ??= []).push({ event, ...data });
};

const root = document.documentElement;
/** Deploy base: '' in production, '/kiape' on the GitHub Pages preview. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/* ---------- Scroll state ---------- */
const onScroll = () => {
  root.toggleAttribute('data-scrolled', window.scrollY > 80);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Reveal ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

/* Hide the mobile CTA bar while the contact section is on screen */
const contact = document.getElementById('contacto');
if (contact && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => root.toggleAttribute('data-at-contact', e.isIntersecting), {
    threshold: 0.15,
  }).observe(contact);
}

/* ---------- Attribution (first touch, per session) ---------- */
const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
const params = new URLSearchParams(location.search);
let attribution: Record<string, string> = {};
try {
  attribution = JSON.parse(sessionStorage.getItem('kiape_attr') || '{}');
} catch {
  /* storage unavailable: attribution falls back to current URL only */
}
if (ATTR_KEYS.some((k) => params.has(k))) {
  attribution = { landing: location.pathname };
  ATTR_KEYS.forEach((k) => params.get(k) && (attribution[k] = params.get(k)!));
  try {
    sessionStorage.setItem('kiape_attr', JSON.stringify(attribution));
  } catch {
    /* ignore */
  }
}
document.querySelectorAll<HTMLInputElement>('input[data-attr]').forEach((input) => {
  input.value = attribution[input.name] ?? '';
});

/* ---------- Click tracking ---------- */
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (el) track(el.dataset.track!, { location: el.closest('section')?.id ?? 'global' });

  // Material cards preselect the material in the form
  const pick = (e.target as HTMLElement).closest<HTMLElement>('[data-pick-material]');
  if (pick) {
    const select = document.querySelector<HTMLSelectElement>('[data-material-select]');
    if (select) select.value = pick.dataset.pickMaterial!;
  }
});

/* ---------- Lead form ---------- */
const form = document.querySelector<HTMLFormElement>('[data-lead-form]');
if (form) {
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;

  const setStatus = (msg: string, state: 'ok' | 'error' | '' = '') => {
    status.textContent = msg;
    status.dataset.state = state;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validation with inline feedback
    let firstInvalid: HTMLElement | null = null;
    form.querySelectorAll<HTMLInputElement>('input, select, textarea').forEach((f) => {
      const ok = f.type === 'hidden' || f.checkValidity();
      if (ok) f.removeAttribute('aria-invalid');
      else {
        f.setAttribute('aria-invalid', 'true');
        firstInvalid ??= f;
      }
    });
    if (firstInvalid) {
      setStatus('Revisa los campos marcados: nombre, teléfono, material y la casilla de privacidad.', 'error');
      (firstInvalid as HTMLElement).focus();
      return;
    }

    const data = new FormData(form);
    if (data.get('botcheck')) return;
    const material = String(data.get('material') || '');
    track('lead_form_submit', { material });

    const key = form.dataset.key;
    if (key) {
      submit.disabled = true;
      setStatus('Enviando…');
      try {
        data.append('access_key', key);
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message || res.statusText);
        location.href = `${BASE}/gracias`;
      } catch {
        submit.disabled = false;
        setStatus('No hemos podido enviar el formulario. Inténtalo de nuevo o escríbenos por WhatsApp.', 'error');
      }
      return;
    }

    // Fallback: hand the lead over to WhatsApp with a pre-filled message
    const lines = [
      'Hola KIAPE, me gustaría solicitar una visita técnica.',
      `Nombre: ${data.get('nombre')}`,
      `Teléfono: ${data.get('telefono')}`,
      data.get('email') && `Email: ${data.get('email')}`,
      `Material: ${material}`,
      data.get('superficie') && `Superficie: ${data.get('superficie')}`,
      data.get('municipio') && `Municipio: ${data.get('municipio')}`,
      data.get('mensaje') && `Proyecto: ${data.get('mensaje')}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    location.href = `${BASE}/gracias?via=whatsapp`;
  });
}
