if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/PWATest/sw.js', {scope: '/PWATest/'}) 
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}




