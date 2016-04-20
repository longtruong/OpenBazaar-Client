var app = require('../App.js').getApp(),
    moment = require('moment');

function cssImageUrl(hash, guid, fallback) {
  var base = app.serverConfig.getServerBaseUrl() + '/',
      url = '',
      localURL = localStorage.getItem('userAvatar-'+guid);

  if (hash) {
    url = `url(${base}get_image?hash=${hash}`;
    if (guid) url += `&guid=${guid})`;
    if (fallback) url +=  ', '
  }

  if (!hash && localURL) {
    url = `url(${localURL})`;
    if (url && fallback) url +=  ', '
  }

  if (fallback) {
    url += `url(${fallback})`;
  }

  return url;
}

function intlNumFormat(numberToFormat, maxDigits){
  return new Intl.NumberFormat(window.lang, {maximumFractionDigits: maxDigits}).format(numberToFormat);
}

module.exports = {
  cssImageUrl: cssImageUrl,
  intlNumFormat: intlNumFormat,
  moment: moment
};