const C='dc1',F=['./','index.html','login.html','register.html','app.html','css/style.css','js/common.js','js/app.js'];
self.oninstall=e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)));
self.onfetch=e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
