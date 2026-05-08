import { useEffect, useRef } from 'react'
import NavigateStyle from '../../styleComponents/Navigate'
import SmoothScroll from '../../hooks/smooth-scroll'
import { isBrowser } from '../../globlas/window'

const Navigate = ({ $open, logo_image, navigation }) => {
  const NavigateListening = useRef(null)

  useEffect(() => {
    if (isBrowser) {
      let ticking = false
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const homeEl = document.querySelector('#home')
            if (!homeEl) return
            if (window.scrollY >= homeEl.getBoundingClientRect().height - 75) {
              NavigateListening.current?.classList.add('navigate-white')
            } else {
              NavigateListening.current?.classList.remove('navigate-white')
            }
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavigateStyle $open={$open} id="navigate" ref={NavigateListening}>
      <div className="hidde"></div>
      <div className="nav-links justify-between container mx-auto">
        {logo_image && (
          <img src={logo_image} width="100px" alt="code" loading="lazy" />
        )}
        <ul className="nav flex items-center flex-col md:flex-row">
          {navigation?.map((item, index) => (
            <li key={index}>
              <a
                onClick={index >= 1 ? SmoothScroll : null}
                href={'#' + item.slug_page?.[0]?.text}
              >
                {item.text_link?.[0]?.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </NavigateStyle>
  )
}

export default Navigate
