/*
 * PRESSENT Web — reemplazo de la API de Electron (window.presenterDesktop).
 * La versión de escritorio abría la ventana de notas con IPC de Electron.
 * Aquí se usa una ventana emergente del navegador + BroadcastChannel.
 * Si el navegador bloquea la ventana emergente, PRESSENT usa el panel de
 * notas dentro de la propia diapositiva (comportamiento original de respaldo).
 */
(function () {
  'use strict';
  var isNotes = /notes\.html$/i.test(location.pathname);
  // Cada ventana principal usa su propio canal para que varias pestañas no mezclen notas.
  var chanId = isNotes
    ? (new URLSearchParams(location.search).get('c') || 'default')
    : Math.random().toString(36).slice(2, 10);
  var ch;
  try { ch = new BroadcastChannel('pressent-notes-' + chanId); } catch (e) { return; } // sin soporte: se usa el respaldo en la página

  function on(type, cb) {
    ch.addEventListener('message', function (ev) {
      if (ev.data && ev.data.type === type) cb(ev.data.payload);
    });
  }

  if (isNotes) {
    /* ---------- Ventana de notas (popup) ---------- */
    window.presenterDesktop = {
      sendNotesChange: function (p) { ch.postMessage({ type: 'change', payload: p }); },
      sendNotesFontSize: function (p) { ch.postMessage({ type: 'font-size', payload: p }); },
      reportNotesHeight: function (h) {
        try {
          var extra = window.outerHeight - window.innerHeight;
          var max = Math.floor(screen.availHeight * 0.84);
          var target = Math.min(max, Math.max(220, Number(h) || 0) + extra);
          if (target > window.outerHeight) window.resizeTo(window.outerWidth, target);
        } catch (e) {}
      },
      onNotesUpdate: function (cb) { on('update', cb); ch.postMessage({ type: 'ready' }); },
      onNotesFontSize: function (cb) { on('font-size-from-main', cb); }
    };
    on('close', function () { window.close(); });
    window.addEventListener('pagehide', function () { ch.postMessage({ type: 'closed' }); });
    return;
  }

  /* ---------- Ventana principal ---------- */
  var popup = null, last = { text: '', fontSize: 16 }, closedCbs = [];

  function fallbackPanel(show) {
    var n = document.getElementById('noteEditor');
    if (!n) return;
    if (show) n.classList.add('show', 'present-note');
  }

  window.presenterDesktop = {
    openNotes: function (payload) {
      last = payload || last;
      if (popup && !popup.closed) { popup.focus(); ch.postMessage({ type: 'update', payload: last }); return; }
      var w = 460, h = 320;
      var left = Math.max(0, (window.screenX || 0) + (window.outerWidth || 1200) - w - 40);
      var top = (window.screenY || 0) + 90;
      popup = window.open('notes.html?c=' + chanId, 'pressent-notes-' + chanId,
        'popup=yes,width=' + w + ',height=' + h + ',left=' + left + ',top=' + top);
      if (!popup) {
        popup = null;
        fallbackPanel(true);
        try { if (window.toast) window.toast('El navegador bloqueó la ventana de notas; se muestran dentro de la diapositiva'); } catch (e) {}
      }
    },
    updateNotes: function (payload) { last = payload || last; ch.postMessage({ type: 'update', payload: last }); },
    closeNotes: function () {
      ch.postMessage({ type: 'close' });
      try { if (popup && !popup.closed) popup.close(); } catch (e) {}
      popup = null;
    },
    onNotesChange: function (cb) { on('change', cb); },
    onNotesFontSize: function (cb) { on('font-size', cb); },
    onNotesClosed: function (cb) { closedCbs.push(cb); }
  };

  on('ready', function () { ch.postMessage({ type: 'update', payload: last }); });
  on('closed', function () { popup = null; closedCbs.forEach(function (cb) { try { cb(); } catch (e) {} }); });
  window.addEventListener('pagehide', function () { try { if (popup && !popup.closed) popup.close(); } catch (e) {} });
})();
