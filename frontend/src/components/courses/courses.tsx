import React, { useContext } from 'react'
import { useState } from 'react'
import { courseData } from '../../data'
import SortingArea from '../course-filter/sorting-area'
import { CourseCardGrid } from '../courseCards'
import { courseContext } from '@/contexts'

const Courses = () => {
  const coursePerView = 6
  const [next, setNext] = useState(coursePerView)
  const [courses, setCourses] = useContext(courseContext)
  const handleLoadData = () => setNext(value => value + 3)

  return (
    <div className="digi-course-area course-area-1 gap-tb-text">
      <div className="container">
        <SortingArea
          items={courseData}
          num={courses?.slice(0, next)?.length}
          setCourses={setCourses}
          courses={courses}
        />

        <div className="row g-5">
          {courses?.slice(0, next)?.map(course => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <CourseCardGrid data={course} classes="course-box-shadow" />
            </div>
          ))}
        </div>
        {}
        {courses !== null && next < courses.length && (
          <div
            onClick={handleLoadData}
            className="load-more-btn"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <a className="digi-btn" style={{ cursor: 'pointer' }}>
              Load More <i className="icon-56" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses
