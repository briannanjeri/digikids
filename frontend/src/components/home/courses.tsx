import { motion } from 'framer-motion'
import Link from 'next/link'

import { useMouseMoveUI } from '@/contexts'
import { courseData } from '@/data'
import { Image } from '@/elements'
import { CourseCardHome } from '../courseCards'
import { courseContext } from '@/contexts'
import { useContext } from 'react'

const Courses = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()

  const [courses, setCourses] = useContext(courseContext)

  const sortedCourses = [...courseData].sort(({ isAvailable: a }, { isAvailable: b }) => (a < b ? 1 : -1)).slice(0, 4)
  return (
    <div className="home-four-course digi-course-area course-area-4 gap-tb-text bg-image">
      <div className="container digikids-animated-shape">
        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
          <span className="pre-title">Popular Courses</span>
          <h2 className="title">Pick A Course To Get Started</h2>
          <span className="shape-line">
            <i className="icon-19" />
          </span>
        </div>

        <div className="row g-5">
          {sortedCourses.map(course => (
            <div className="col-xl-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800" key={course.id}>
              <CourseCardHome data={course} />
            </div>
          ))}
        </div>

        <div className="course-view-all" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
          <Link href="/courses" className="digi-btn">
            Browse more courses <i className="icon-4" />
          </Link>
        </div>
        <ul className="shape-group">
          <motion.li
            className="shape-1 scene"
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
            animate={{
              x: mouseDirection(25).x,
              y: mouseDirection(25).y,
            }}
          >
            <Image h={186} src="/assets/images/about/shape-13.png" alt="Shape" />
          </motion.li>
          <motion.li
            className="shape-2 scene"
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
            animate={{
              x: mouseReverse(35).x,
              y: mouseReverse(35).y,
            }}
          >
            <span />
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Courses
