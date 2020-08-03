const darkModeButton = document.getElementById('dark-mode-toggle')

function checkDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function watchDarkMode() {
  if (!window.matchMedia) return
  window.matchMedia('(prefers-color-scheme: dark)').addListener(addDarkModeSelector)
}

function listenDarkModeToggle() {
  darkModeButton.addEventListener('click', toggleDarkMode)
}

function addDarkModeSelector() {
  if (checkDarkMode()) {
    setDarkMode()
  } else {
    setLightMode()
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('mode-dark')) {
    setLightMode()
  } else {
    setDarkMode()
  }
}

function setDarkMode() {
  document.documentElement.classList.add('mode-dark')
}

function setLightMode() {
  document.documentElement.classList.remove('mode-dark')
}

addDarkModeSelector()
watchDarkMode()
listenDarkModeToggle()