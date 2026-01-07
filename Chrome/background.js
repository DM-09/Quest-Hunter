// Discord Desktop User agent
var useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36 discord/0.0.41'

async function update() {
  var rule = {
    id: 1,
    priority: 1,
    action: {
      type: "modifyHeaders",
        requestHeaders: [
        { header: "user-agent", operation: "set", value: useragent }
      ]
    },
    condition: {
      urlFilter: "||discord.com",
      resourceTypes: [ "main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "webtransport", "webbundle", "other" ]
    }
  }
  await chrome.declarativeNetRequest.updateSessionRules({ removeRuleIds: [1], addRules: [rule] })
}

update()
