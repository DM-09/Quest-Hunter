(() => {
  var ele = document.body

  ele.insertAdjacentHTML('afterend', `
  <style>
  .qbtn {
    bottom: 30px;
    right: 30px;
    position: fixed;
    z-index: 9999;
    background-color: #6c757d;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
  }

  .qbtn:hover {
    background-color: #5C636A;
  }
  </style>
`)

  ele.insertAdjacentHTML('afterend', `<a href='#'><span id='QuestHunter' class='qbtn'>Start Quest</span></a>`)

  var btn = document.querySelector('#QuestHunter')
  var cnt = 0

  btn.addEventListener("click", () => {
    if (cnt > 0) { alert('To complete another quest, Please reload the page'); return }
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
