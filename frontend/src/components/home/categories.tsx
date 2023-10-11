import Link from 'next/link'
import React from 'react'
import { categoryProp } from '../typescriptMigration/type'

const Category = ({ delay, color, icon, icon_name, title }: categoryProp) => (
  <div className="col" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
    <div className={`category-grid category-style-3 ${color}`}>
      <div className={`icon ${icon_name ? icon_name : ''}`}>
        <i className={icon} />
      </div>
      <div className="content">
        <Link href="/course-style-1">
          <h5 className="title">{title}</h5>
        </Link>
      </div>
    </div>
  </div>
)

const Categories = () => (
  <div className="digi-category-area category-area-3 digi-section-gap bg-image" id="categories">
    <div className="container">
      <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
        <span className="pre-title pre-textsecondary">Categories</span>
        <h2 className="title">
          Creative, <span className="color-primary">Experiential,</span> Modular STEM Classes
        </h2>
        <span className="shape-line">
          <i className="icon-19" />
        </span>
        <p>You can choose a course from our wide range of courses. We have courses for all ages and all levels.</p>
      </div>
      <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-4">
        <Category delay={'100'} color={'color-primary-style'} icon="icon-game" title={'Game development'} />
        <Category delay={'150'} color={'color-secondary-style'} icon="icon-11" title={'Web Development'} />
        <Category delay={'200'} color={'color-extra04-style'} icon="icon-scratch" title={'Creative Computing'} />
        <Category delay={'250'} color={'color-tertiary-style'} icon="icon-mobile" title={'Mobile Development'} />
        <Category delay={'300'} color={'color-extra02-style'} icon="icon-robot" title={'Robotics'} />
      </div>
    </div>
  </div>
)

export default Categories
