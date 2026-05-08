import { useEffect } from 'react'

function setMeta(attr, value, content) {
  let el = document.querySelector(`meta[${attr}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function Seo({ description = '', lang = 'en', title }) {
  const desc = description || 'Portfolio site'

  useEffect(() => {
    document.documentElement.lang = lang
    const pageTitle = title ? `${title} | Portfolio` : 'Portfolio'
    document.title = pageTitle

    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:description', desc)
  }, [lang, title, desc])

  return null
}

export default Seo
