function find(parent, selector, timeout=5000) {
  return new Promise((resolve) => {
    if (parent.querySelector(selector)) {
      return resolve(parent.querySelector(selector))
    }

    var observer = new MutationObserver(() => {
      if (parent.querySelector(selector)) {
        observer.disconnect()
        resolve(parent.querySelector(selector))
      }
    })

    observer.observe(parent.body, { childList: true, subtree: true })
    setTimeout(() => { observer.disconnect(); resolve(null); }, timeout);
  })
}

(async () => {
  var container = await find(document, '._57454517c20909ea-headingWrapper');
  if (!container) { return }

  var ele = await find(container, '._4bd5201c86a2042b-defaultColor')
  if (!ele) { return }

  ele.insertAdjacentHTML('beforeend', ` <button id="QuestHunter">Start Quest</button>`)

  var btn = document.querySelector('#QuestHunter')
  var cnt = 0

  btn.addEventListener("click", () => {
    if (cnt > 0) { alert('Please reload the page'); return }
    var script = document.createElement('script')
    script.src = chrome.runtime.getURL('main.js')
    document.head.appendChild(script)
    cnt++
  })
})()

var viewport = document.querySelector('meta[name="viewport"]')

if (!viewport) {
  viewport = document.createElement('meta')
  viewport.name = 'viewport'
  document.head.appendChild(viewport)
}

viewport.content = `width=1024, initial-scale=${window.screen.width / 1024}, user-scalable=yes`
