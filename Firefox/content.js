var viewport = document.querySelector('meta[name="viewport"]')

if (!viewport) {
  viewport = document.createElement('meta')
  viewport.name = 'viewport'
  document.head.appendChild(viewport)
}

viewport.content = `width=1024, initial-scale=${window.screen.width / 1024}, user-scalable=yes`