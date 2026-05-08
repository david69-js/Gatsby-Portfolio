import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePrismicData } from '../prismic/hooks'
import StyleBackground from '../styleComponents/StyleBackground'
import BG from '../images/bg-project.jpg'
import MyImage from '../hooks/LazyLoad'

const CATEGORIES = ['All', 'Shopify', 'React']

const Projects = () => {
  const { data } = usePrismicData('projects')
  const allProjects = data || []
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return allProjects
    return allProjects.filter(
      p => p.data?.category1 === activeCategory
    )
  }, [allProjects, activeCategory])

  return (
    <div id="projects">
      <StyleBackground $bg_image={BG} className="bg-projects">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center gap-4 mb-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredProjects.map((project, index) => {
              const { title_project, description_ptoject, link_project, link_code, image_project, category1 } = project.data || {}
              const uid = project.uid
              return (
                <div className="card" key={index} onClick={() => navigate(`/project/${uid}`)}>
                  <MyImage image={image_project?.url} />
                  <div className="card-overlay" />
                  {category1 && <span className="card-category">{category1}</span>}
                  <div className="card-body" onClick={e => e.stopPropagation()}>
                    <h1>{title_project?.[0]?.text}</h1>
                    <p>{description_ptoject?.[0]?.text}</p>
                    <div className="card-actions">
                      {link_project?.url && (
                        <a href={link_project.url} target="_blank" rel="noreferrer" className="btn-demo">
                          Live Demo
                        </a>
                      )}
                      {link_code?.url && (
                        <a href={link_code.url} target="_blank" rel="noreferrer" className="btn-code">
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </StyleBackground>
    </div>
  )
}

export default Projects
