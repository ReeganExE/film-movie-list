const a1 = JSON.stringify(
  Array.from(document.querySelector('.js-project-list').querySelectorAll('a')).reduce(
    (pre, a) => ({
      ...pre,
      [a.href]: a.textContent
    }),
    {}
  ),
  null,
  2
)

const a2 = JSON.stringify(
  Array.from(
    document.querySelector('.js-page__section').querySelectorAll('a.js-gridItem'),
    (a) => ({
      ...a.dataset,
      href: a.href
    })
  ),
  null,
  2
)

document.write(`<pre>${a1}</pre><pre>${a2}</pre>`)
