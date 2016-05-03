'use strict'

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var requestHeaders = details.requestHeaders

    for (var i = 0; i < requestHeaders.length; ++i) {
      if (requestHeaders[i].name === 'Referer') {
        var url = requestHeaders[i].value

        if(~url.indexOf('//up.b9dm.com') || ~url.indexOf('//streamin.to')){
          return { cancel: true }
        }
      }
    }
  },
  {
    urls: [
      '*://123.dominoad.com/adsrvmedia/*',
      '*://adm.shinobi.jp/*',
      '*://cas.criteo.com/delivery/ajs.php?*',
      '*://creative.speednetwork6.com/*',
      '*://cdn.adsrvmedia.net/*',
      '*://up.b9dm.com/system/cache/ad_js/*',
      '*://js.gsspcln.jp/*',
      '*://onclickads.net/*',
      '*://www.toponclick.com/*',
      '*://www.adnetworkperformance.com/*',
      '*://b.scorecardresearch.com/*'
    ]
  },
  [
    'requestHeaders',
    'blocking'
  ]
)
