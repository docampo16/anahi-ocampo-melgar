const publications = [
 {year:'2026',title:'The tool and the viewer: Plurality of values and hydrological modeling in the Huasco river basin',authors:'Ocampo-Melgar, A., Bidegain, I., Madrid, P., Peredo, M., Hough, M. & Cerda, C.',journal:'Ecosystem Services, 79',tags:['values','water'],url:'https://doi.org/10.1016/j.ecoser.2026.101860'},
 {year:'2026',title:'Editorial: Sociohydrology in drylands',authors:'Castelli, G., Wassar, F., Bresci, E., Piemontese, L., Nüsser, M., Ocampo-Melgar, A. & de Brito, M. M.',journal:'Frontiers in Environmental Science',tags:['water'],url:'https://investigadores.anid.cl/es/public_search/researcher?id=20841'},
 {year:'2025',title:'Co-creating water knowledge: A community perspective',authors:'Castelli, G., Howard, C. B., Adyel, M. T. & Ocampo-Melgar, A.',journal:'Hydrological Sciences Journal',tags:['values','governance','water'],url:'https://doi.org/10.1080/02626667.2025.2571065'},
 {year:'2025',title:'Basin councils policy in Chile: An assessment of progress toward enhanced water resilience',authors:'Barría, P., Pérez, C., Ocampo-Melgar, A., Donoso, G., Rivera, D. & Rojas, C.',journal:'Environmental Science & Policy',tags:['governance','water'],url:'https://investigadores.anid.cl/es/public_search/researcher?id=20841'},
 {year:'2025',title:'Using a robust decision making (RDM) approach to explore current and future vulnerabilities of a semi-arid coastal basin: A case study of the Quilimarí basin in Chile',authors:'Poblete, D. et al. (including Ocampo-Melgar, A.)',journal:'Frontiers in Environmental Science',tags:['water'],url:'https://investigadores.anid.cl/es/public_search/researcher?id=20841'}
];
const pubList=document.querySelector('#pub-list');
function renderPublications(filter='all') {const filtered=publications.filter(p=>filter==='all'||p.tags.includes(filter));pubList.innerHTML=filtered.map(p=>`<article class="pub-item"><span class="pub-year">${p.year}</span><div class="pub-info"><h3>${p.title}</h3><p>${p.authors}</p><span class="pub-journal">${p.journal}</span></div><a class="pub-action" href="${p.url}" target="_blank" rel="noopener" aria-label="${document.documentElement.lang==='es'?'Leer publicación':'Read publication'}: ${p.title}">↗</a></article>`).join('');}
renderPublications();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');renderPublications(btn.dataset.filter)}));
const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.querySelector('span').textContent=isOpen?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.querySelector('span').textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();

// Bilingual content, Spanish by default, English upon explicit selection.
function setLanguage(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-es][data-en]').forEach(el=>{el.textContent=el.getAttribute('data-'+lang)});
 document.querySelectorAll('[data-language]').forEach(b=>{const active=b.dataset.language===lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 document.title=lang==='es'?'Anahí Ocampo-Melgar | Investigación y colaboración':'Anahí Ocampo-Melgar | Research & Collaboration';
 document.querySelector('meta[name="description"]').content=lang==='es'?'Investigación sobre conocimientos plurales, gobernanza colaborativa y decisiones ambientales.':'Research on plural knowledge, collaborative governance, and environmental decision-making.';
 const selected=document.querySelector('.filter.active');renderPublications(selected?selected.dataset.filter:'all');
}
document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.language)));
setLanguage('es');
