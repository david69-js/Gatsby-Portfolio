import React, {useEffect, useRef} from 'react'
import Project from '../styleComponents/Project'
import StyleBackground from '../styleComponents/StyleBackground'
import BG from '../images/bg-project.jpg'
import { useStaticQuery, graphql, Link } from "gatsby"
import MyImage from '../hooks/LazyLoad'
import { isBrowser } from '../globlas/window'

const Projects = () => {
  const data = useStaticQuery(graphql`
  query AllProjects {
    allPrismicProjects {
      edges {
        node {
          data {
            description_ptoject {
              text
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
      if (isBrowser) {
        window.addEventListener("resize", () =>{
          if (window.innerWidth > 1200) {
            scrollContainer.current.addEventListener("wheel", (evt) => {
              evt.preventDefault();
              scrollContainer.current.scrollLeft += evt.deltaY/1.5;
            });     
          }else{
            scrollContainer.current.removeEventListener("wheel", () =>{
              console.log('remove');
            })
          }
      }); 
      }
    }, [])
    const allProjects = data.allPrismicProjects.edges;
  return (
   <div id="projects">
     <StyleBackground bg_image={BG} className="bg-projects">
      <div className="contianer-scroll main" ref={scrollContainer}>
      {
            allProjects.map((project, index) =>{
              const {title_project, description_ptoject, link_project, link_code, image_project } = project.node.data;
              return (
                <div className="wrapper" key={index}> 
                  <div className="card">
                    <MyImage image={image_project.fluid.src}  />
                      <div className="info">
                          <h1>{title_project.text}</h1>
                          <p>{description_ptoject.text}</p>
                          <Link to={link_project.url} target="_blank">View Project</Link>
                      </div>
                  </div>
                </div>             
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