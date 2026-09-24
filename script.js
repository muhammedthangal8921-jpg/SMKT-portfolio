if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, {threshold: 0.06});
 document.querySelectorAll('section > .section-head, .about-grid, .skills article, .project, .service-card, .credentials > div').forEach(el => {el.classList.add('reveal-ready'); observer.observe(el);});
}
