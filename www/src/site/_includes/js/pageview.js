fetch('/api/pageview', {
  method: 'POST',
  body: JSON.stringify({
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    locale: Intl.DateTimeFormat().resolvedOptions().locale,
    pathname: window.location.pathname }),
  headers: { 'Content-Type': 'application/json' }
})