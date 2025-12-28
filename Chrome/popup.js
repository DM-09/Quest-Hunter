function exe() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0]
    chrome.tabs.executeScript(tab.id, {
      code: `(function() {
          var script = document.createElement('script');
          script.src = "${chrome.runtime.getURL('main.js')}";
          (document.head || document.documentElement).appendChild(script);
        })()`
    })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', exe)
})