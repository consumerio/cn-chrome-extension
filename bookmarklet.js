chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {code: "(function(){var cn_script_tag=document.createElement('SCRIPT');cn_script_tag.type='text/javascript';cn_script_tag.src='https://s3.amazonaws.com/consumernotebook/js/bookmarklet.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(cn_script_tag);})();"});
});
