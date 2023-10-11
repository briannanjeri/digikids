import React from 'react'
import { motion } from 'framer-motion'

import { useMouseMoveUI } from '@/contexts'
import { Image } from '@/elements'
import { MissionProps } from '../typescriptMigration/type'

// MissionItem
function MissionItem({ color, icon, title, text }: MissionProps) {
  return (
    <div className="single-item" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
      <div className={`icon color-extra${color}`}>
        <i className={`icon-${icon}`} />
      </div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

const AboutUsArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()
  return (
    <div className="digi-section-gap digi-about-area about-style-8">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="about-content">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">About Us</span>
                <h2 className="title">
                  What is <span className="color-secondary">digikids</span>{' '}
                </h2>
                <span className="shape-line">
                  <i className="icon-19" />
                </span>
                <p>
                  digikids is Kenya’s leading STEM (Science, Technology, Engineering & Mathematics) education institute
                  providing tailored coding programs for kids aged 6 to 17 years of age. Our classes comprise weekend
                  coding classes, holiday coding bootcamps, and STEM workshops.
                </p>
              </div>
              <div className="about-mission">
                <MissionItem
                  color="02"
                  icon="51"
                  title="Our Mission"
                  text="We inspire students to solve real-world problems by providing comprehensive, industry-ready coding and design thinking curriculum."
                />
                <MissionItem
                  color="06"
                  icon="52"
                  title="Our Vision"
                  text="Inspire young learners to become confident problem-solvers and digital citizens through innovative STEM education."
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-image-gallery">
              <div className="row g-5" id="masonry-gallery">
                <div className="col-6 masonry-item">
                  <div
                    className="thumbnail thumbnail-1 mb--30"
                    data-sal-delay="50"
                    data-sal="slide-down"
                    data-sal-duration="1000"
                  >
                    <Image w={255} h={320} src="/assets/images/about/gaming.png" alt="About Images" />
                  </div>

                  <div
                    className="thumbnail thumbnail-4"
                    data-sal-delay="50"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <Image w={255} h={180} src="/assets/images/about/robotics.png" alt="About Images" />
                  </div>
                </div>
                <div className="col-6 masonry-item">
                  <div
                    className="thumbnail thumbnail-2 mb--30"
                    data-sal-delay="50"
                    data-sal="slide-down"
                    data-sal-duration="1000"
                  >
                    <Image w={255} h={200} src="/assets/images/about/coding.png" alt="About Images" />
                  </div>
                  <div
                    className="thumbnail thumbnail-3"
                    data-sal-delay="50"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <Image w={255} h={255} src="/assets/images/about/family-robotics.png" alt="About Images" />
                  </div>
                </div>
              </div>
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <Image w={210} h={193} src="/assets/images/about/shape-33.png" alt="Shape Images" />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <Image w={186} src="/assets/images/about/shape-25.png" alt="Shape Images" />
                </motion.li>
                <motion.li
                  className="shape-3 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <Image w={186} src="/assets/images/about/shape-13.png" alt="Shape Images" />
                </motion.li>
                <motion.li
                  className="shape-4 scene"
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsArea
