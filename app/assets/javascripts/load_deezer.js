function playDeezer() {
  var w = document[typeof document.getElementsByClassName === 'function' ? 'getElementsByClassName' : 'querySelectorAll']('deezer-widget-player');
  for (var i = 0, l = w.length; i < l; i++) {
    w[i].innerHTML = '';
    var el = document.createElement('iframe');
    el.src = w[i].getAttribute('data-src');
    el.scrolling = w[i].getAttribute('data-scrolling');
    el.frameBorder = w[i].getAttribute('data-frameborder');
    el.setAttribute('frameBorder', w[i].getAttribute('data-frameborder'));
    el.allowTransparency = w[i].getAttribute('data-allowTransparency');
    el.width = w[i].getAttribute('data-width');
    el.height = w[i].getAttribute('data-height');
    w[i].appendChild(el);
  }
};
