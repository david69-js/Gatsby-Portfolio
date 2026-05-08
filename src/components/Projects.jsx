import React, { useEffect, useRef } from 'react'
import { usePrismicData } from '../prismic/hooks'
import StyleBackground from '../styleComponents/StyleBackground'
import BG from '../images/bg-project.jpg'
import MyImage from '../hooks/LazyLoad'
import { isBrowser } from '../globlas/window'

const Projects = () => {
  const { data } = usePrismicData('projects')
  const allProjects = data || []

  const scrollContainer = useRef(null)

  useEffect(() => {
    if (isBrowser && window.innerWidth > 1200) {
      const el = scrollContainer.current
      if (!el) return
      const handler = (evt) => {
        evt.preventDefault()
        el.scrollLeft += evt.deltaY / 1.5
      }
      el.addEventListener('wheel', handler)
      return () => el.removeEventListener('wheel', handler)
    }
  }, [])

  const renderCard = () =>
    allProjects.map((project, index) => {
      const { title_project, description_ptoject, link_project, link_code, image_project } = project.data || {}
      return (
        <div className="wrapper" key={index}>
          <div className="card">
            <MyImage image={image_project?.url} />
            <div className="info">
              <h1>{title_project?.[0]?.text}</h1>
              <p>{description_ptoject?.[0]?.text}</p>
              <a href={link_project?.url} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      )
    })

  return (
    <div id="projects">
      <StyleBackground $bg_image={BG} className="bg-projects">
        <div className="contianer-scroll main ld-visible" ref={scrollContainer}>
          {renderCard()}
        </div>
        <div className="contianer-scroll main ld-hide">{renderCard()}</div>
      </StyleBackground>
    </div>
  )
}

export default Projects
