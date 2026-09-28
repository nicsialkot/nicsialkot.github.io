/* NIC Sialkot - the one permanent link.
 * This page only forwards to the NIC Sialkot app. Everything after the "?" in the link
 * (a startup's private link, the Team hub, the Team Return) is passed on unchanged.
 * authuser=0 keeps Google on the browser's first account: without it, a browser signed in to several
 * Google accounts can be sent to /u/1/, where the app does not open (checked 28 Sep 2026).
 * If the app's address ever changes, change APP below - nothing else, and every link already sent keeps working. */
(function () {
  var APP = 'https://script.google.com/macros/s/AKfycbxwRDlsLZqZK3wZF3VwtdMh3aQg1NFx6V1rAe7lDqp5gtVeyO-T5EUoIUNLQ0KabwgV8g/exec';
  var has = function (q, k) { return ('&' + q + '&').indexOf('&' + k + '=') >= 0; };
  var add = (document.currentScript && document.currentScript.getAttribute('data-add')) || '';   // e.g. hub=1 on /hub/
  var q = (location.search || '').replace(/^\?/, '');
  if (add && !has(q, add.split('=')[0])) q = q ? add + '&' + q : add;
  if (!has(q, 'authuser')) q = q ? q + '&authuser=0' : 'authuser=0';
  var url = APP + '?' + q + (location.hash || '');
  window.NIC_TARGET = url;
  try { location.replace(url); } catch (e) { location.href = url; }
})();
