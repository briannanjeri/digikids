import { motion } from 'framer-motion'
import React from 'react'

import { Image } from '@/elements'
import { useMouseMoveUI } from '@/contexts'
import { featureBoxProps } from '../typescriptMigration/type'

function FeatureBox({ img, color, title, icon, text }: featureBoxProps) {
  return (
    <div className="col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
      <div className={`why-choose-box-3 features-box ${color}`}>
        <div className="thumbnail">
          <Image w={370} h={250} src={`/assets/images/about/${img}.png`} alt="why choose image" />
        </div>
        <div className="content">
          <div className="icon">
            <i className={`icon-${icon}`} />
          </div>
          <h4 className="title">{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

const WhyChose = () => {
  const { mouseReverse } = useMouseMoveUI()

  return (
    <section className="why-choose-area-4 digi-section-gap">
      <div className="container digikids-animated-shape">
        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
          <span className="pre-title">Our Classes</span>
          <h2 className="title">
            Our programs offer <span className="color-secondary">three</span> distinct stages <br /> catering to
            different ages.
          </h2>
          <span className="shape-line">
            <i className="icon-19" />
          </span>
        </div>
        <div className="row g-5">
          <FeatureBox
            color="color-primary-style"
            img="novice"
            icon="45"
            title="Novice"
            text="In our foundation stage, we spark a love for technology as a creative tool in young minds. We use fun tools to teach electronics, robotics, and programming basics."
          />

          <FeatureBox
            color="color-secondary-style"
            img="intermediate"
            icon="46"
            title="Explorer"
            text="Our students learn computer science concepts with hands-on coding experience. They'll gain the ability to design, write and debug code with specific goals in mind."
          />

          <FeatureBox
            color="color-extra08-style"
            img="novice"
            icon="47"
            title="Star"
            text="With proficiency in multiple programming languages, students are empowered to build their own apps and games, letting their creativity and imagination lead."
          />
        </div>
        <ul className="shape-group">
          <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <Image w={186} className="rotateit" src="/assets/images/about/shape-13.png" alt="shape 13" />
          </li>
          <motion.li
            className="shape-2 scene"
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
            animate={{
              x: mouseReverse(40).x,
              y: mouseReverse(40).y,
            }}
          >
            <span />
          </motion.li>
          <li className="shape-3 circle scene sal-animate" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <span className="d-block" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default WhyChose
