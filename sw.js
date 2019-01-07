
const CACHE_STATIC = 'static-v1';

const APP_SHELL=[
    'index.html',
    'js/app.js',
    'sw.js',
    'manifest.json'
];


self.addEventListener('install', e=>{
    const respuesta = caches.open(CACHE_STATIC).then(res=>{
       res.addAll(APP_SHELL);
    });
    e.waitUntil(respuesta);
});



self.addEventListener('fetch', e=>{
    
    const respuesta = caches.match(e.request);
    
    e.respondWith(respuesta);
    
});



