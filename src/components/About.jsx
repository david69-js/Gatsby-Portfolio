import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import StyleBackground from  '../styleComponents/StyleBackground';
const About = () => {
  const data = useStaticQuery( graphql`
  query H {
    allPrismicAbout {
      edges {
        node {
          data {
            about_description {
              html
            }
            about_image {
              fluid {
                src
              }
              alt
            }
            about_title {
              text
            }
            image_group_three {
              image {
                fluid {
                  src
                }
                alt
              }
            }
            images_group_one {
              image {
                fluid {
                  src
                }
                alt
              }
            }
            images_group_two {
              image {
                fluid {
                  src
                }
                alt
              }
            }
            sub_title_group_three {
              text
            }
            sub_title_one {
              text
            }
            sub_title_two {
              text
            }
          }
        }
      }
    }
  }`)
  const { 
    about_title, about_description, about_image,
    sub_title_one, images_group_one, 
    sub_title_two, images_group_two,
    sub_title_group_three, image_group_three  } = data.allPrismicAbout.edges[0].node.data;
  
  const getAllImages = (data, block) =>{
   return data.map((image, index) =>{
      return (
        <div key={index} className="about-image flex flex-col justify-center">
          <img src={image.image.fluid.src} alt={`image`+index} className={`about-${block}_image image-icon`} />
          <span>{image.image.alt}</span>
        </div>
      )
    })
  }
  return (
    <div className="sticky" id="about">
      <StyleBackground bg_image={about_image.fluid.src} className="about">
        <div className="about-container container mx-auto">
          <div className="about-first_block">
            <h2 className="about-subtitle green-color">{about_title.text}</h2>
            <div className="about-descrition"dangerouslySetInnerHTML={{__html: about_description.html}}></div>
          </div>
          <div className="about-second_block">
            <h2 className="about-subtitle green-color">{sub_title_one.text}</h2>
            <div className="about-skills flex flex-wrap justify-center gap-4">
              {getAllImages(images_group_one, 'skills')}
            </div>
          </div>
          <div className="about-third_block">
            <h2 className="about-subtitle green-color">{sub_title_two.text}</h2>
            <div className="about-learning flex flex-wrap justify-center gap-4">
            {getAllImages(images_group_two, 'learning')}
            </div>
          </div>
          <div className="about-fourth_block">
            <h2 className="about-subtitle green-color">{sub_title_group_three.text}</h2>
            <div className="about-also_worked flex flex-wrap justify-center gap-4">
            {getAllImages(image_group_three, 'also_worked')}
            </div>
          </div>
        </div>
      </StyleBackground>
    </div>
  )
}

export default About