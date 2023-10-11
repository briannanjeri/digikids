import React from 'react'

import Counter from '../common/counter'

import { counter_data } from '@/data'

const CounterArea = () => {
  return (
    <div className="counterup-area-3 gap-bottom-equal">
      <div className="container">
        <div className="row g-5">
          {counter_data.map((c, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className={`digi-counterup counterup-style-3 ${c.border_none ? c.border_none : ''}`}>
                <h2 className={`counter-item count-number ${c.color}`}>
                  <span className="odometer">
                    <Counter number={parseFloat(c.count.toString())} text={c.text} decimal={c.decimal} />
                  </span>
                </h2>
                <h6 className="title">{c.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterArea
