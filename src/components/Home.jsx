import React, {useEffect, useState} from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import StyleBackground from '../styleComponents/StyleBackground'
import SmoothScroll from '../hooks/smooth-scroll';
import { isBrowser } from '../globlas/window';
const Home = () => {
    const data = useStaticQuery(graphql`
    query HomePrismicQuery {
        allPrismicHome {
            edges {
              node {
                data {
                  home_image {
                    url
                  }
                  home_sub_title {
                    text
                  }
                  home_title {
                    text
                  }
                }
              }
            }
        }
    }
  `)
    const { home_image, home_sub_title, home_title } = data.allPrismicHome.edges[0].node.data;
    const [moveImage, setMoveImage] = useState(0);
    useEffect(() => {
      if (isBrowser) {
          const handleScroll = () => {
            if (window.scrollY) {
              setMoveImage(window.scrollY)
            }
          };

            window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }
      }, []);
      const moveDeskOrMobile = isBrowser ? window.innerWidth <= 767 ? 3 : 2 : null;
      const cole = {
          transform: 'translateX('+(moveImage/moveDeskOrMobile)+'%) scaleX(1)',
          position: 'sticky', 
      }
      const kanye = {
        transform: 'translateX('+-(moveImage/moveDeskOrMobile)+'%) scaleX(-1)',
        position: 'sticky', 
    }
    return (
    <div id="home" >
     
        <StyleBackground bg_image={home_image.url} className="content">
        <img className="md:absolute mx-auto gitf-image-rigth" alt="brook" src="https://media2.giphy.com/media/IcpFUnxQ4F8tYSuE8u/giphy.gif?cid=ecf05e4785hqjoi4n5ww340ljgo00kk12lbfko40p9vf5n1t&rid=giphy.gif&ct=s"  />
            <div className="content__main-title">
              <div className="box">
                  <div className="title">
                      <span className="block"></span>
                      <h1>{home_title.text}<span></span></h1>
                  </div>
                  <div className="role">
                      <div className="block"></div>
                      <p>{home_sub_title.text}</p>
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
          <Link  to={'#about'} onClick={SmoothScroll} className="triangle_down"></Link>
        <div className="content__image flex flex-wrap justify-between">
          <img className="content__image-cole" alt="cole" style={cole} src="https://media2.giphy.com/media/1jJyoKURSBblwPOBXS/giphy.gif?cid=ecf05e47syibrjmhd052dqtm59t5qer8b2air7frwdwfhyfs&rid=giphy.gif&ct=s" height="100" width="100px" />
          <img className="content__image-cole rigth-0" alt="kanye" style={kanye} src="https://media0.giphy.com/media/hu0f2AhuKGrb93mEX8/giphy.gif?cid=ecf05e47m08rf9rs2zehcy50lq0bhmqrbywinv997qetdosw&rid=giphy.gif&ct=s" height="100" width="100px" />
        </div> 
        </StyleBackground>
    </div>
  )
}

export default Home