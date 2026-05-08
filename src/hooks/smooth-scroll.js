import { isBrowser } from "../globlas/window"

const SmoothScroll = (e) => {
  e.preventDefault()
  const href = e.currentTarget.getAttribute('href')
  const target = href?.split('#')[1]
  if (!target) return
  const location = document.querySelector('#' + target)?.offsetTop
  if (location == null) return
  const moveDeskOrMobile = window.innerWidth <= 767 ? 0 : 75
  if (isBrowser) {
    window.scrollTo({
      left: 0,
      top: location - moveDeskOrMobile,
    })
  }
}

export default SmoothScroll
