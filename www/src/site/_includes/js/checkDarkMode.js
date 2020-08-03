const darkModeButton = document.getElementById('dark-mode-toggle')
const lightModeIcon = document.getElementById('light-mode-icon')
const darkModeIcon = document.getElementById('dark-mode-icon')

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
  lightModeIcon.classList.add('hidden')
  darkModeIcon.classList.remove('hidden')
}

function setLightMode() {
  document.documentElement.classList.remove('mode-dark')
  lightModeIcon.classList.remove('hidden')
  darkModeIcon.classList.add('hidden')
}

addDarkModeSelector()
watchDarkMode()
listenDarkModeToggle()