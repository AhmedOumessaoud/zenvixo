'use strict';
const whatsappNumber = '212608031794';
const whatsappUrl = message => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappUrl('Bonjour ZENVIXO, je souhaite obtenir un devis gratuit pour le nettoyage de ma cuisine professionnelle. Merci de me contacter.'); });
document.querySelectorAll('[data-service]').forEach(link => {
  link.href = whatsappUrl(`Bonjour ZENVIXO, je souhaite obtenir un devis gratuit pour : ${link.dataset.service}. Merci de me contacter.`);
});
document.getElementById('year').textContent = new Date().getFullYear();
const comparisonRange = document.getElementById('comparison-range');
comparisonRange.addEventListener('input', () => comparisonRange.closest('.comparison').style.setProperty('--position', `${comparisonRange.value}%`));
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold: .08});
 document.querySelectorAll('.section-heading,.service-card,.why-grid,.steps article').forEach(element => { element.classList.add('reveal-ready'); observer.observe(element); });
}
