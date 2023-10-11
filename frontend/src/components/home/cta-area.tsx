import React from 'react'
import { motion } from 'framer-motion'
import { useMouseMoveUI } from '@/contexts'
import { Image } from '@/elements'

const CtaArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()

  return (
    <div className="cta-area-1 my-xxl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="home-four-cta digi-cta-box cta-style-3 bg-image bg-image--16">
              <div className="inner">
                <div className="content text-end">
                  <span className="subtitle">Get In Touch:</span>
                  <h3 className="title">
                    <a href="mailto:info@digikids.co.ke">info@digikids.co.ke</a>
                  </h3>
                </div>
                <div className="sparator">
                  <span>or</span>
                </div>
                <div className="content">
                  <span className="subtitle">Call Us Via:</span>
                  <h3 className="title">
                    <a href="tel:+254743665574">+254 743 665 574</a>
                  </h3>
                </div>
              </div>
              <ul className="shape-group">
                <motion.li
                  className="shape-01 scene"
                  animate={{
                    x: mouseReverse(25).x,
                    y: mouseReverse(25).y,
                  }}
                >
                  <Image w={106} src="/assets/images/cta/shape-06.png" alt="shape" />
                </motion.li>
                <motion.li
                  className="shape-02 scene"
                  animate={{
                    x: mouseDirection(25).x,
                    y: mouseDirection(25).y,
                  }}
                >
                  <Image w={132} h={101} src="/assets/images/cta/shape-12.png" alt="shape" />
                </motion.li>
                <motion.li
                  className="shape-03 scene"
                  animate={{
                    x: mouseDirection(25).x,
                    y: mouseDirection(25).y,
                  }}
                >
                  <Image w={106} src="/assets/images/cta/shape-04.png" alt="shape" />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaArea
