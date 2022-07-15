import React, {useEffect, useRef} from 'react'
import Project from '../styleComponents/Project'
import StyleBackground from '../styleComponents/StyleBackground'
import BG from '../images/bg-project.jpg'
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
  query AllProjects {
    allPrismicProjects {
      edges {
        node {
          data {
            description_ptoject {
              html
            }
            image_project {
              fluid {
                src
              }
            }
            link_project {
              url
            }
            link_code {
              url
            }
            title_project {
              text
            }
          }
        }
      }
    }
  }  
`)

  const scrollContainer = useRef(null);
    useEffect(() => {
      scrollContainer.current.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.current.scrollLeft += evt.deltaY/1.5;
      });
    }, [])
    const allProjects = data.allPrismicProjects.edges;
  return (
   <div id="projects">
     <StyleBackground bg_image={BG}>
      <div className="contianer-scroll main" ref={scrollContainer}>
        
          {
            allProjects.map((project, index) =>{
              const {title_project, description_ptoject, link_project, link_code, image_project } = project.node.data;
              return (
                <Project key={index} bg_image={image_project.fluid.src} >
                  <div className="project-content">
                    {title_project.text}
                  </div>
                </Project>
                
              )
            }
            )
          }
      </div>
    </StyleBackground>
   </div>
    
  )
}

export default Projects