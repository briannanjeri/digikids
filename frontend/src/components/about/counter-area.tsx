import React from 'react'
import { motion } from 'framer-motion'

import { useMouseMoveUI } from '@/contexts'
import Counter from '../common/counter'

import { counter_data } from '@/data'
import { Image } from '@/elements'

const CounterArea = () => {
  const { mouseDirection } = useMouseMoveUI()

  return (
    <div className="counterup-area-9">
      <div className="container digikids-animated-shape">
        <div className="row g-5">
          {counter_data.map((c, i) => {
            const { color, count, text, title, icon } = c
            return (
              <div
                key={i}
                className="col-lg-3 col-sm-6"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <div className="digi-counterup counterup-style-4">
                  <div className={`icon ${color}`}>
                    <i className={`icon-${icon}`} />
                  </div>
                  <h2 className="counter-item count-number">
                    <span className="odometer">
                      <Counter number={parseFloat(count.toString())} text={text} decimal={c.decimal} />
                    </span>
                  </h2>
                  <h6 className="title">{title}</h6>
                </div>
              </div>
            )
          })}
        </div>

        <ul className="shape-group">
          <motion.li
            className="shape-1 scene"
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
            animate={{
              x: mouseDirection(40).x,
              y: mouseDirection(40).y,
            }}
          >
            <Image w={123} h={140} src="/assets/images/others/shape-27.png" alt="Shape" />
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default CounterArea
