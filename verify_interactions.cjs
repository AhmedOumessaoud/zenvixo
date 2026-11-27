const fs=require('fs'),vm=require('vm'),assert=require('assert');
const links=[{dataset:{service:'Dégraissage des hottes & filtres'}}],general=[{}];let onRange;
const range={value:70,addEventListener:(n,f)=>onRange=f,closest:()=>({style:{setProperty:(n,v)=>assert.equal(v,'70%')}})};
vm.runInNewContext(fs.readFileSync('js/main.js','utf8'),{document:{querySelectorAll:s=>s==='[data-service]'?links:general,getElementById:id=>id==='comparison-range'?range:{}},window:{},Date,encodeURIComponent});
assert(links[0].href.startsWith('https://wa.me/212608031794?text='));assert(new URL(links[0].href).searchParams.get('text').includes(links[0].dataset.service));assert(general[0].href.includes('wa.me/212608031794'));onRange();
assert(!fs.readFileSync('index.html','utf8').includes('<form'));
console.log('PASS: direct WhatsApp service messages, general CTA, comparison, no order form.');
