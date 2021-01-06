// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/sw.js")
//     .then(
//       function (pushSubscription) {
//         console.log(pushSubscription.subscriptionId);
//         console.log(pushSubscription.endpoint);
//         // The push subscription details needed by the application
//         // server are now available, and can be sent to it using,
//         // for example, an XMLHttpRequest.
//       },
//       function (error) {
//         // During development it often helps to log errors to the
//         // console. In a production environment it might make sense to
//         // also report information about errors back to the
//         // application server.
//         console.log(error);
//       }
//       // reg => console.log('service worker registered')
//     )
//     .catch((err) => console.log("service worker not registered", err));
// }

const gURL = (value) => {
  var url = "hhtps://google.com";
  if (value == "6") url ="https://cse3.ml/404";
  if (value == "4") url ="https://meet.google.com/hve-apza-egt";//old one "https://meet.google.com/nvx-fdbu-iuf";
  if (value == "3") url = "https://meet.google.com/gma-sysw-ydj";
  if (value == "1") url = "https://meet.google.com/lookup/fgx2i426tj";
  if (value == "5") url = "https://meet.google.com/omq-vyrx-kye";//old one-"https://meet.google.com/lookup/cplbuqw4sk";
  if (value == "2") url = "https://meet.google.com/lookup/fscipzf234";
  if (value == "7") url = "https://meet.google.com/jhq-hofm-sqs";
  if(value == "8") url ="https://meet.google.com/tsv-ymxs-aak";
  if(value == "9") url ="https://meet.google.com/tsv-ymxs-aak";
  if(value == "10") url ="https://meet.google.com/tsv-ymxs-aak";
  window.location.href = url;
  // console.log(url, value);
};
