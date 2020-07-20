if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(
      function(pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
      // reg => console.log('service worker registered')
      )
    .catch(err => console.log('service worker not registered', err));
}