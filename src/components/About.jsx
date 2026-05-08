import React, { memo } from 'react'
import { usePrismicData } from '../prismic/hooks'
import { asText } from '@prismicio/richtext'
import { PrismicRichText } from '@prismicio/react'
import StyleBackground from '../styleComponents/StyleBackground'
import MyImage from '../hooks/LazyLoad'

const safeText = (field) => (field ? asText(field) : '')

const About = () => {
  const { data } = usePrismicData('about')
  const aboutData = data?.[0]?.data

  const {
    about_title, about_description, about_image,
    sub_title_one, images_group_one, 
    sub_title_two, images_group_two,
    sub_title_group_three, image_group_three,
  } = aboutData || {}

  const getAllImages = (imgs, block) =>
    imgs?.map((item, index) => (
      <div key={index} className="about-image flex flex-col justify-center">
        <MyImage
          image={item.image?.url}
          className={`about-${block}_image image-icon`}
        />
        <span>{item.image?.alt}</span>
      </div>
    ))

  return (
    <div className="sticky" id="about">
      <div className="hidden md:block container relative mx-auto">
        <MyImage
          className="rotate-gift absolute drake"
          image="https://media4.giphy.com/media/e7QR593l1Vl94uqs9x/giphy.gif?cid=ecf05e4719w4804dg658zlh95kap6iiprpcgokpj4f02rtm0&rid=giphy.gif&ct=s"
        />
        <MyImage
          className="rotate-gift absolute kanye"
          image="https://media4.giphy.com/media/L2UAZ7ALwRYf81NVAX/giphy.gif?cid=ecf05e47ae88j5r92092tyrbxmolm14d63cxpdfuug0vimcw&rid=giphy.gif&ct=s"
        />
      </div>
      <StyleBackground $bg_image={about_image?.url} className="about">
        <div className="about-container container mx-auto">
          <div className="about-first_block">
            <h2 className="about-subtitle green-color">{safeText(about_title)}</h2>
            <div className="about-descrition">
              {about_description && <PrismicRichText field={about_description} />}
            </div>
          </div>
          <div className="about-second_block relative">
            <img
              alt="all icons"
              loading="lazy"
              className="rotate-gift absolute right-0 cm-top"
              src="https://media2.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif?cid=ecf05e47bgkaajqdjpqrozjhqumk8l8bblc7gqsgbk7uwgnd&rid=giphy.gif&ct=s"
            />
            <img
              alt="all icons"
              loading="lazy"
              className="rotate-gift absolute left-0 cm-top"
              src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=ecf05e4750pczb151si3jde5rx973tdwchkjkg398in5tijt&rid=giphy.gif&ct=s"
            />
            <h2 className="about-subtitle green-color">{safeText(sub_title_one)}</h2>
            <div className="about-skills flex flex-wrap justify-center gap-4">
              {getAllImages(images_group_one, 'skills')}
            </div>
          </div>
          <div className="about-third_block relative">
            <h2 className="about-subtitle green-color">{safeText(sub_title_two)}</h2>
            <div className="about-learning flex flex-wrap justify-center gap-4">
              {getAllImages(images_group_two, 'learning')}
            </div>
          </div>
          <div className="about-images">
            <img
              alt="all icons"
              loading="lazy"
              className="rotate-gift absolute left-0"
              src="https://media0.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif?cid=ecf05e476oveqh3wexsypba1t52vc2kbzlxzagkarezdj4ov&rid=giphy.gif&ct=s"
            />
            <img
              alt="all icons"
              loading="lazy"
              className="rotate-gift absolute right-0"
              src="https://media0.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=ecf05e47rcf093xzfc2panewlks27pyk5m2u36p3jjcnwsdr&rid=giphy.gif&ct=s"
            />
          </div>
          <div className="about-fourth_block">
            <h2 className="about-subtitle green-color">{safeText(sub_title_group_three)}</h2>
            <div className="about-also_worked flex flex-wrap justify-center gap-4">
              {getAllImages(image_group_three, 'also_worked')}
            </div>
          </div>
        </div>
      </StyleBackground>
    </div>
  )
}

export default memo(About)
