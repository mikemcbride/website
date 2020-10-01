const darkModeButton = document.getElementById('dark-mode-toggle')
const localStorageKey = 'mikemcbride.dark-mode'

function checkDarkMode() {
  // first, check if localStorage has a preference.
  // if so, use that
  const lsItem = window.localStorage.getItem(localStorageKey)
  if (lsItem) {
    return lsItem === 'dark'
  }

  // if no preference, default to system preference
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
  // only manually set dark/light mode if they click the button
  // otherwise, use system preference
  if (document.documentElement.classList.contains('mode-dark')) {
    setLightMode()
    window.localStorage.setItem(localStorageKey, 'light')
  } else {
    setDarkMode()
    window.localStorage.setItem(localStorageKey, 'dark')
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