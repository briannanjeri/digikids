import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import { useMouseMoveUI } from '@/contexts'
import { Image } from '@/elements'

const AdBanner = ({ home_4 }: { home_4: boolean }) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()
  return (
    <div
      className={`${home_4 ? 'online-academy-cta-wrapper' : 'university-cta-wrapper'} digi-cta-banner-area bg-image`}
    >
      <div className="container">
        <div className="digi-cta-banner">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="section-title section-center"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <h2 className="title">
                  Our tutors are active<span className="color-primary"> Software Engineers</span>.
                </h2>
                <p>
                  So our students benefit from learning from experienced professionals who are up-to-date with the
                  latest developments in the industry. Our tutors bring real-world experience and practical knowledge
                  into the classroom, which helps our students to gain a deeper understanding of the subject matter and
                  its application in the real world.
                </p>
                <Link href="/courses" className="digi-btn btn-secondary">
                  Find a course <i className="icon-4" />
                </Link>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <motion.li
              className="shape-01 scene"
              animate={{
                x: mouseDirection(25).x,
                y: mouseDirection(25).y,
              }}
            >
              <Image w={120} src="/assets/images/cta/shape-10.png" alt="shape" />
            </motion.li>
            <motion.li
              className="shape-02 scene"
              animate={{
                x: mouseReverse(25).x,
                y: mouseReverse(25).y,
              }}
            >
              <Image w={109} h={39} src="/assets/images/cta/shape-09.png" alt="shape" />
            </motion.li>
            <motion.li
              className="shape-03 scene"
              animate={{
                x: mouseReverse(25).x,
                y: mouseReverse(25).y,
              }}
            >
              <Image w={158} h={174} src="/assets/images/cta/shape-08.png" alt="shape" />
            </motion.li>
            <motion.li
              className="shape-04 scene"
              animate={{
                x: mouseDirection(25).x,
                y: mouseDirection(25).y,
              }}
            >
              <Image w={186} src="/assets/images/about/shape-13.png" alt="shape" />
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdBanner
