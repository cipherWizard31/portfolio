/**
 * CERTIFICATES DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * To add a new certificate, just push a new object to the array below.
 *
 *  img      : path to the certificate image (relative to the HTML file)
 *  issuer   : name of the issuing organisation
 *  title    : certificate / course title
 *  featured : true  → shown on the homepage (index.html) top-5 preview
 *             false → shown only on certificates.html (all certs page)
 * ─────────────────────────────────────────────────────────────────────────────
 */
const CERTIFICATES = [
  {
    img: 'assets/img/certificates/NatanYidnekachew.webp',
    issuer: 'Evangadi',
    title: 'MERN Stack Development',
    featured: true
  },
  {
    img: 'assets/img/certificates/Responsive web design.webp',
    issuer: 'FreeCodeCamp',
    title: 'Responsive Web Design',
    featured: true
  },
  {
    img: 'assets/img/certificates/ai1_page-0001.webp',
    issuer: 'Ethio Coders Initiative (Udemy)',
    title: 'Artificial Intelligence Fundamentals',
    featured: true
  },
  {
    img: 'assets/img/certificates/JavaScript.webp',
    issuer: 'Sololearn',
    title: 'Introduction to JavaScript',
    featured: true
  },
  {
    img: 'assets/img/certificates/learn.udacity.com_view-certificate_nd002-gc-251.webp',
    issuer: 'Ethio Coders Initiative (Udemy)',
    title: 'Data Analysis Fundamentals',
    featured: true
  },
  {
    img: 'assets/img/certificates/HTML.webp',
    issuer: 'Sololearn',
    title: 'Introduction to HTML',
    featured: false
  },
  {
    img: 'assets/img/certificates/css.webp',
    issuer: 'Sololearn',
    title: 'Introduction to CSS',
    featured: false
  },
  {
    img: 'assets/img/certificates/ab.webp',
    issuer: 'Sololearn',
    title: 'A/B Testing Using AI',
    featured: false
  },
  {
    img: 'assets/img/certificates/udacity-programming.webp',
    issuer: 'Ethio Coders Initiative (Udemy)',
    title: 'Programming Fundamentals',
    featured: false
  }
];

/**
 * Renders certificate cards into a container element.
 * @param {HTMLElement} container  - The grid element to append cards into.
 * @param {Array}       certs      - Array of certificate objects to render.
 */
function renderCertificates(container, certs) {
  container.innerHTML = certs.map((cert, i) => `
    <div class="col-lg-4 col-md-6 portfolio-item" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
      <div class="portfolio-wrap">
        <img
          src="${cert.img}"
          class="img-fluid"
          alt="${cert.title} – ${cert.issuer}"
          loading="lazy"
          width="400"
          height="300"
        />
        <div class="portfolio-info">
          <h4>${cert.issuer}</h4>
          <p>${cert.title}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Homepage: render top-5 featured certificates ─────────────────────────────
const homeGrid = document.getElementById('cert-grid-home');
if (homeGrid) {
  const featured = CERTIFICATES.filter(c => c.featured).slice(0, 5);
  renderCertificates(homeGrid, featured);
}

// ── Certificates page: render all certificates ────────────────────────────────
const allGrid = document.getElementById('cert-grid-all');
if (allGrid) {
  renderCertificates(allGrid, CERTIFICATES);
}
