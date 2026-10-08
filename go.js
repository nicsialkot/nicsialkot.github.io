/* NIC Sialkot - the one permanent link.
 * This page only forwards to the NIC Sialkot app. Everything after the "?" in the link
 * (a startup's private link, the Team hub, the Team Return) is passed on unchanged.
 * The app runs on NIC Sialkot's own server (register #600-#602): every link opens there at once.
 * ROLLBACK: put the Apps Script address back as APP (it ends in /exec) - nothing else. With it, authuser=0 is added again:
 * a browser signed in to several Google accounts can otherwise be sent to /u/1/, where the app does not open (checked 28 Sep 2026). */
(function () {
  var APP = 'https://nic-hub.tailb28fab.ts.net';
  var appsScript = /^https:\/\/script\.google\.com\//.test(APP);
  var has = function (q, k) { return ('&' + q + '&').indexOf('&' + k + '=') >= 0; };
  var add = (document.currentScript && document.currentScript.getAttribute('data-add')) || '';   // e.g. hub=1 on /hub/
  var q = (location.search || '').replace(/^\?/, '');
  if (add && !has(q, add.split('=')[0])) q = q ? add + '&' + q : add;
  if (appsScript && !has(q, 'authuser')) q = q ? q + '&authuser=0' : 'authuser=0';
  var url = APP + (appsScript ? '' : '/') + (q ? '?' + q : '') + (location.hash || '');
  window.NIC_TARGET = url;
  try { location.replace(url); } catch (e) { location.href = url; }
})();
