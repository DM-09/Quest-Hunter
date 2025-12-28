var Useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36 discord/0.0.41'

chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
    for (let i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'User-Agent') {
            details.requestHeaders[i].value = Useragent
        }
    }
    return { requestHeaders: details.requestHeaders }
  },
{ urls: ["<all_urls>"] }, ["blocking", "requestHeaders"])