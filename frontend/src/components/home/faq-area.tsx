import React from 'react'
import { motion } from 'framer-motion'

import { Image } from '@/elements'
import { useMouseMoveUI } from '@/contexts'
import { accordionItems } from '../typescriptMigration/type'

const accordion_items: accordionItems[] = [
  {
    id: 'collapseOne',
    show: true,
    title: 'Can my child start a Digikids class at any time during the year?',
    desc: 'We have structured enrolment periods for our weekend coding classes and holiday coding bootcamps. However, we do offer online private lessons, which can be booked at any time during the year to ensure that your child continues to learn coding.',
  },
  {
    id: 'collapseTwo',
    show: false,
    title: 'What coding languages are taught at Digikids?',
    desc: 'We offer a range of coding languages including Scratch, Python, Java, JavaScript, React, and HTML/CSS. Our curriculum is designed to teach our students industry-standard coding languages.',
  },
  {
    id: 'collapseThree',
    show: false,
    title: "What age range is suitable for Digikids' coding classes?",
    desc: 'Digikids offers coding classes for kids aged 6 to 17 years old. We have tailored programs for each age group to ensure that they receive the best learning experience.',
  },
]

const FaqArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()
  return (
    <div className="digi-faq-area faq-style-2 bg-image">
      <div className="container">
        <div className="row g-5 row--45">
          <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
            <div className="digi-faq-content">
              <div className="section-title section-left">
                <span className="pre-title">FAQ’s</span>
                <h2 className="title">Nurturing Young Tech Talents</h2>
                <span className="shape-line">
                  <i className="icon-19" />
                </span>
                <p>
                  We understand that parents and guardians want to make informed decisions about their child&apos;s
                  education, and we are here to provide the information you need to make those decisions with
                  confidence.
                </p>
              </div>
              <div className="faq-accordion" id="faq-accordion">
                <div className="accordion">
                  {accordion_items.map(({ desc, id, show, title }, i) => (
                    <div key={i} className="accordion-item">
                      <h5 className="accordion-header">
                        <button
                          className={`accordion-button ${show ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${id}`}
                          aria-expanded={show ? 'true' : 'false'}
                        >
                          {title}
                        </button>
                      </h5>
                      <div
                        id={id}
                        className={`accordion-collapse collapse ${show ? 'show' : ''}`}
                        data-bs-parent="#faq-accordion"
                      >
                        <div className="accordion-body">
                          <p>{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="digi-faq-gallery">
              <div className="row g-5">
                <div className="col-6" data-sal-delay="50" data-sal="slide-down" data-sal-duration="1000">
                  <div className="faq-thumbnail thumbnail-1">
                    <Image w={255} h={440} src="/assets/images/faq/cue-robot.png" alt="Girl with a cue robot" />
                  </div>
                </div>
                <div className="col-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                  <div className="faq-thumbnail thumbnail-2">
                    <Image
                      w={255}
                      h={370}
                      src="/assets/images/faq/mindstorms.png"
                      alt="Two girls with a lego mindstorms robot"
                    />
                  </div>
                </div>
              </div>
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <Image w={123} h={140} src="/assets/images/faq/shape-06.png" alt="Shape Images" />
                </motion.li>
                <li className="shape-2">
                  <Image w={158} h={174} src="/assets/images/faq/shape-04.png" alt="Shape Images" />
                </li>
                <motion.li
                  className="shape-3 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <Image w={210} h={193} src="/assets/images/faq/shape-16.png" alt="Shape Images" />
                </motion.li>
                <motion.li
                  className="shape-4 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <Image w={123} src="/assets/images/banner/shape-03.png" alt="Shape Images" />
                </motion.li>
                <motion.li
                  className="shape-5 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <Image w={210} h={193} src="/assets/images/faq/shape-08.png" alt="Shape Images" />
                </motion.li>
                <motion.li
                  className="shape-6 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <Image w={85} h={37} src="/assets/images/faq/shape-09.png" alt="Shape Images" />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqArea
