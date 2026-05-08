const SmoothScroll = (e) => {
  e.preventDefault()
  const href = e.currentTarget.getAttribute('href')
  const target = href?.split('#')[1]
  if (!target) return
  const el = document.querySelector('#' + target)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default SmoothScroll
