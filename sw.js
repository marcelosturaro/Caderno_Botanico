const ID='caderno-botanico-a7f39e21',V='v5',CACHE=ID+'-'+V;
const FILES=['./','index.html','flora-1.js','flora-2.js','flora-3.js','flora-4.js','flora-5.js','flora-6.js','flora-7.js','flora-8.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','maskable-512.png','apple-touch-icon.png','favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(ID)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>{
if(hit&&/flora-\d|icon|favicon|apple-touch/.test(r.url))return hit;
const net=fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}).catch(()=>hit||caches.match('index.html'));
return hit||net}))});
