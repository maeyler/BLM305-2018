function installCB(e) {
  console.log('install oldu', e.request);
}
self.addEventListener('install', installCB)

function fetchCB(e) { //fetch first no cache
  let req = e.request
  console.log('fetch', req.url);
  e.respondWith(
    fetch(req).then(r2 => r2)
    .catch(console.log)
  )
}
self.addEventListener('fetch', fetchCB)

