import { useEffect, useRef } from 'react'
import { usePrismicData } from '../prismic/hooks'
import StyleBackground from '../styleComponents/StyleBackground'
import SmoothScroll from '../hooks/smooth-scroll'
import MyImage from '../hooks/LazyLoad'

const Home = () => {
  const { data } = usePrismicData('home')
  const homeData = data?.[0]?.data
  const { home_image, home_sub_title, home_title } = homeData || {}

  const coleRef = useRef(null)
  const kanyeRef = useRef(null)
  const rafId = useRef(null)

  useEffect(() => {
    const cole = coleRef.current
    const kanye = kanyeRef.current
    if (!cole || !kanye) return

    const handleScroll = () => {
      rafId.current = requestAnimationFrame(() => {
        const moveImage = window.scrollY
        const factor = window.innerWidth <= 767 ? 3 : 2
        cole.style.transform = 'translateX(' + moveImage / factor + '%) scaleX(1)'
        kanye.style.transform = 'translateX(' + -(moveImage / factor) + '%) scaleX(-1)'
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div id="home">
      <StyleBackground $bg_image={home_image?.url} className="content">
        <MyImage
          className="md:absolute mx-auto gitf-image-rigth"
          image="https://media3.giphy.com/media/kdACZLeIqjhoQ983qi/giphy.gif?cid=ecf05e470slye9ad9aod276w1yj48ax65wyem9qqloae9dgu&rid=giphy.gif&ct=s"
        />
        <div className="content__main-title">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>{home_title?.[0]?.text}<span></span></h1>
            </div>
            <div className="role">
              <div className="block"></div>
              <p>{home_sub_title?.[0]?.text}</p>
            </div>
          </div>
        </div>
        <div id="container">
          Make
          <div id="flip">
            <div><div>wOrK</div></div>
            <div><div>lifeStyle</div></div>
            <div><div>Everything</div></div>
          </div>
          AweSoMe!
        </div>
        <a href={'#about'} onClick={SmoothScroll} className="triangle_down"></a>
        <div className="content__image flex flex-wrap justify-between">
          <MyImage
            ref={coleRef}
            className="content__image-cole"
            image="https://media2.giphy.com/media/1jJyoKURSBblwPOBXS/giphy.gif?cid=ecf05e47syibrjmhd052dqtm59t5qer8b2air7frwdwfhyfs&rid=giphy.gif&ct=s"
          />
          <MyImage
            ref={kanyeRef}
            className="content__image-cole rigth-0"
            image="https://media0.giphy.com/media/hu0f2AhuKGrb93mEX8/giphy.gif?cid=ecf05e47m08rf9rs2zehcy50lq0bhmqrbywinv997qetdosw&rid=giphy.gif&ct=s"
          />
        </div>
      </StyleBackground>
    </div>
  )
}

export default Home
