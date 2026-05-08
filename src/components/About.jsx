import { memo } from 'react'
import { usePrismicData } from '../prismic/hooks'
import { asText } from '@prismicio/richtext'
import { PrismicRichText } from '@prismicio/react'
import StyleBackground from '../styleComponents/StyleBackground'
import MyImage from '../hooks/LazyLoad'

const safeText = (field) => (field ? asText(field) : '')

const SkillGrid = ({ items, block }) =>
  items?.map((item, index) => (
    <div key={index} className="about-image">
      <MyImage
        image={item.image?.url}
        className={`about-${block}_image image-icon`}
      />
      <span>{item.image?.alt}</span>
    </div>
  ))

const About = () => {
  const { data } = usePrismicData('about')
  const aboutData = data?.[0]?.data

  const {
    about_title, about_description, about_image,
    sub_title_one, images_group_one,
    sub_title_two, images_group_two,
    sub_title_group_three, image_group_three,
  } = aboutData || {}

  return (
    <div className="sticky" id="about">
      <StyleBackground $bg_image={about_image?.url} className="about">
        <div className="about-container container mx-auto">
          <div>
            <h2 className="about-subtitle green-color">{safeText(about_title)}</h2>
            <div className="about-descrition">
              {about_description && <PrismicRichText field={about_description} />}
            </div>
          </div>

          <div>
            <h2 className="about-subtitle green-color">{safeText(sub_title_one)}</h2>
            <div className="about-skills">
              <SkillGrid items={images_group_one} block="skills" />
            </div>
          </div>

          <div>
            <h2 className="about-subtitle green-color">{safeText(sub_title_two)}</h2>
            <div className="about-learning">
              <SkillGrid items={images_group_two} block="learning" />
            </div>
          </div>

          <div>
            <h2 className="about-subtitle green-color">{safeText(sub_title_group_three)}</h2>
            <div className="about-also_worked">
              <SkillGrid items={image_group_three} block="also_worked" />
            </div>
          </div>
        </div>
      </StyleBackground>
    </div>
  )
}

export default memo(About)
