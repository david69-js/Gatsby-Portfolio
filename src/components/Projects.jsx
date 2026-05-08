import { usePrismicData } from '../prismic/hooks'
import StyleBackground from '../styleComponents/StyleBackground'
import BG from '../images/bg-project.jpg'
import MyImage from '../hooks/LazyLoad'

const Projects = () => {
  const { data } = usePrismicData('projects')
  const allProjects = data || []

  return (
    <div id="projects">
      <StyleBackground $bg_image={BG} className="bg-projects">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {allProjects.map((project, index) => {
              const { title_project, description_ptoject, link_project, image_project } = project.data || {}
              return (
                <div className="card" key={index}>
                  <MyImage image={image_project?.url} />
                  <div className="info">
                    <h1>{title_project?.[0]?.text}</h1>
                    <p>{description_ptoject?.[0]?.text}</p>
                    {link_project?.url && (
                      <a href={link_project.url} target="_blank" rel="noreferrer">
                        View Project
                      </a>
                    )}
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
