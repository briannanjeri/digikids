import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { useMouseMoveUI } from '@/contexts'
import { Image } from '@/elements'

const HeroArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()

  return (
    <div className="hero-banner hero-style-4 bg-image">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="banner-content">
              <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                Registration Ongoing
                <br />
                August Holiday Classes
              </h1>
              <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">
                Empowering young minds to create with technology
                <br />
                Kenya&apos;s premier STEM institute for kids aged 6-17 yrs since 2015.
              </p>
              <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                <Link href="/register" className="digi-btn btn-secondary">
                  Register Now <i className="icon-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-gallery">
        <Thumbnail num={'1'} slide={'slide-up'} img={'home_1.png'} />
        <Thumbnail num={'2'} slide={'slide-down'} img={'home_2.png'} />
        <Thumbnail num={'3'} slide={'slide-right'} img={'home_3.png'} />
        <div className="online-support" data-sal-delay="600" data-sal="slide-right" data-sal-duration="1000">
          <div className="inner">
            <div className="icon">
              <i className="icon-29" />
            </div>
            <div className="content">
              <span className="subtitle">Talk to us</span>
              <h4 className="title">
                <a href="tel:+254743665574">+254 743 665 574</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down-btn">
        <a className="scroll-btn" href="#categories" aria-label="scroll down">
          <i className="icon-41" />
        </a>
      </div>
      <ul className="shape-group">
        <motion.li
          className="shape-1 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseReverse(25).x,
            y: mouseReverse(25).y,
          }}
        >
          <Image w={210} h={183} src="/assets/images/others/shape-17.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-2 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <Image w={130} src="/assets/images/banner/shape-03.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-3 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseReverse(25).x,
            y: mouseReverse(25).y,
          }}
        >
          <Image w={85} h={37} src="/assets/images/faq/shape-09.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-4 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <Image w={105} h={99} src="/assets/images/others/shape-15.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-5 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <Image w={81} h={86} src="/assets/images/others/shape-16.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-6 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseReverse(25).x,
            y: mouseReverse(25).y,
          }}
        >
          <Image w={123} h={191} src="/assets/images/faq/shape-12.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-7 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <Image w={210} h={193} src="/assets/images/others/shape-17.png" alt="Shape" />
        </motion.li>

        <li className="shape-8 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
          <span />
        </li>
      </ul>
    </div>
  )
}

export default HeroArea

const Thumbnail = ({ num, slide, img }: { num: string; slide: string; img: string }) => {
  return (
    <div className={`thumbnail thumbnail-${num}`} data-sal-delay="500" data-sal={slide} data-sal-duration="1000">
      <Image src={`/assets/images/banner/${img}`} alt="Girl Image" />
    </div>
  )
}
